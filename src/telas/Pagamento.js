import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';

import Botao from '../components/Botao';
import Clientes from '../components/Clientes';
import Radio from '../components/Radio';

export default class Pagamento extends React.Component {


  state = {
    clientes: []
  };
  
  getJsonData = () => {
    const url = window.servidor + '/cliente/'
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          clientes: responseJson
        })
      })
      .catch((error) => {
        console.error
      })
  }

  getAllClientes = () => {
    const url = window.servidor + "/cliente/"
    fetch(url)
      .then(response => response.json())
      .then((data) => {
          this.setState({clientes: data})
          console.log(data)
      })
  }

  componentDidMount = () => {
    this.getJsonData()
  }

  funcNomeChange = (event) => {
    this.setState({nome: event.target.value})
  }
  funcCpfChange = (event) => {
    this.setState({cpf: event.target.value})
  }
  funcEmailChange = (event) => {
    this.setState({email: event.target.value})
  }
  funcSenhaChange = (event) => {
    this.setState({senha: event.target.value})
  }
  funcClienteSelecionadoChange = (event) => {
    this.setState({clienteSelecionado: event.target.value})
  }

  

  render() {

    return (
      <>
        <View>
          <Clientes { ...this.state.clientes }/>
        </View>

        <View>
          <Botao texto='Adicionar' style={ estilos.botao } onPress={ () => this.getJsonData() } />
          <Radio 
            sel={ 0 }
            options={ ['Cartão','Dinheiro'] }
            vertical={ true }
            onChangeSelect={ (opt, index) => alert(index) }
          />
        </View>
      </>
    );

  }

}

const estilos = StyleSheet.create( {

  botao: {
    margin: 30,
  },

  tela: {
    flex: 1,
  },

})
