import React from 'react'
import { StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, TextInputMask } from 'react-native-paper';

import Botao from '../components/Botao';
import InputBox from '../components/InputBox'
import Texto from '../components/Texto';
export default class CadastroUsuario extends React.Component {

  state = {
    id: "",
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
    senha: "",
    csenha: "",
  }

  gravarCliente = () => {
    if(this.state.senha === this.state.csenha) {
      const dados = {
        "nome": this.state.nome,
        "email": this.state.email,
        "telefone": this.state.telefone,
        "cpf": this.state.cpf,
        "senha": this.state.senha
      }

      const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
      };
      const url = window.servidor + '/cliente/incluir/'
        fetch(url, requestOptions)
        .then(response => {
          if(response.status === 200){
            console.log('Cliente cadastrado com sucesso.')
            this.funcLimparInputs()
          }else{
            console.log('Falha durante o cadastro.')
          }
        })
        .catch(erro => console.log(erro));
      } else {
        alert('Senha incorreta !')
      }
  }

  funcLimparInputs = () => {
    this.setState({
      id: "",
      nome: "",
      email: "",
      telefone: "",
      cpf: "",
      senha: "",
      csenha: "",
    })
  }

  nomeChange = (valor) => {
    this.setState({nome: valor})
  }
  emailChange = (valor) => {
    this.setState({email: valor})
  }
  telefoneChange = (valor) => {
    this.setState({telefone: valor})
  }
  cpfChange = (valor) => {
    this.setState({cpf: valor})
  }
  senhaChange = (valor) => {
    this.setState({senha: valor})
  }
  csenhaChange = (valor) => {
    this.setState({csenha: valor})
  }

  render() {
    return (
      <>
        <ScrollView>
          <View style={ estilos.container }>
            <Texto style={ estilos.texto }>Dados Pessoais</Texto>
            <TextInput
              label='Nome'
              style={ estilos.entrada }
              value={ this.state.nome }
              onChangeText={ valor => this.nomeChange( valor ) }
            />
            <InputBox 
              label='E-mail'
              style={ estilos.entrada }
              value={ this.state.email }
              keyboardType='email-address'
              onChangeText={ valor => this.emailChange( valor ) }
            />

            <InputBox 
              label='Telefone' 
              style={ estilos.entrada }
              value={ this.state.telefone }
              keyboardType='number-pad'
              onChangeText={ valor => this.telefoneChange( valor ) }
            />

            <InputBox 
              label='CPF' 
              style={ estilos.entrada }
              value={ this.state.cpf }
              onChangeText={ valor => this.cpfChange( valor ) }
            />


            
            <Texto style={ estilos.texto }>Definir Senha</Texto>
            <InputBox
              label='Digite a senha'
              style={ estilos.entrada }
              value={ this.state.senha }
              onChangeText={ valor => this.senhaChange( valor ) }
            />
            <InputBox
              label='Confirme a senha'
              style={ estilos.entrada }
              value={ this.state.csenha }
              onChangeText={ valor => this.csenhaChange( valor ) }
            />
          </View>
        </ScrollView>
        <View style={ estilos.botaoView }>
          <Botao texto='Cadastrar' style={ estilos.botao } onPress={ () => this.gravarCliente() } />
        </View>
      </>
    )
  }
}

const estilos = StyleSheet.create( {

  botao: {
    margin: 30,
  },
  botaoView: {
    backgroundColor: "#ffffff",
    alignContent: 'center',
    margin: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
    margin: 10,
  },
  entrada: {
    backgroundColor: "white",
    marginBottom: 5,
    marginTop: 10,
  },
  texto: {
    textAlign: 'center',
  },
})
