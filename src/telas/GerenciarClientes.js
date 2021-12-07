import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Botao from '../components/Botao';
import Clientes from '../components/Clientes';

export default class GerenciarClientes extends React.Component {


  state = {
    clientes: []
  }

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
          { this.state.clientes && this.state.clientes.map( cliente => {
            return (
              <View key={ cliente.id }>
                <Clientes { ...cliente }/>
              </View>
            )}
          )}
        </View>

        <View>
          <Botao texto='Adicionar' style={ estilos.botao } onPress={ () => this.getJsonData() } />
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
