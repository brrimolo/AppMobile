import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import InputBox from '../components/InputBox';
import Botao from '../components/Botao';


export default function Login({ navigation }) {
  
  const [login, setLogin] = useState('');
  const [cliente, setCliente] = useState([]);
  const [password, setPassword] = useState('');

  const onChangeLogin = login => setLogin(login);
  const onChangePassword = password => setPassword(password);

  function efetuarLogin() {
    var clogin = {
        "email":login,
        "senha":password
    }
    var requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(clogin)
    }
    var url = window.servidor + '/cliente/login'

    console.log([url, requestOptions])

    fetch(url, requestOptions)
        .then(response => setCliente(response.json()))
        .then(data => setCliente(data))
        .then(alert(['Usuário logado', cliente.email]))
        
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
          onPress={ efetuarLogin }
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
