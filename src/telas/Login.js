import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import InputBox from '../components/InputBox';
import Botao from '../components/Botao';


export default function Login({ navigation }) {
  
  const [login, setLogin] = useState('');
  const onChangeLogin = login => setLogin(login);
  const [password, setPassword] = useState('');
  const onChangePassword = password => setPassword(password);

  function efetuarLogin() {
    var flogin = {
        "email":login,
        "senha":password
    }
    var requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(flogin)
    }

    var url = window.servidor + '/funcionario/login'
    fetch(url,requestOption)
        .then(response => response.json())
        .then(data => this.setState({clienteLogin: data}) )
        .then(() => {
            let nomeUsuario = this.state.clienteLogin.nome;
            if(login==='null'){
                sessionStorage.setItem('NomeLogin','null')
                sessionStorage.setItem('IdUsuarioLogado','null')
            }else{
                sessionStorage.setItem('NomeLogin',this.state.clienteLogin.nome)
                sessionStorage.setItem('IdUsuarioLogado',this.state.clienteLogin.matricula)
                toast.success('Benvindo '+ nomeUsuario)
                window.location.reload()
            }
        })
  }
  


  return (
    <>
      <View style={ estilos.container }>
        <InputBox
          label='E-mail'
          value={ login }
          style={ estilos.entrada }
          keyboardType='email-address'
          onChangeText={ onChangeLogin }
        />
        <InputBox
          label='Senha'
          value={ password }
          style={ estilos.entrada }
          keyboardType='visible-password'
          onChangeText={ onChangePassword }
        />
        <Botao 
          texto='Logar'
          style={ estilos.botao }
          onPress={ onChangePassword }
        />
        <View style={ estilos.container }>
          <Text style={ estilos.texto }>Caso não tenha cadastro clique aqui:</Text>
          <Botao 
            texto='Cadastrar'
            style={ estilos.botao }
            onPress={ () => navigation.navigate('Cadastro de Usuário') }
          />
        </View>
      </View>
    </>
  )
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
    margin: 10,
  },
  botao: {
    marginTop: 50,
  },
  entrada: {
    marginTop: 10,
    marginBottom: 10,
  },
  texto: {
    marginTop: 15,
    fontSize: 18,
    lineHeight: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});
