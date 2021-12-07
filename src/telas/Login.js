import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import InputBox from '../components/InputBox';
import Botao from '../components/Botao';


export default function Login() {
  
  const [login, setLogin] = useState('');
  const onChangeLogin = login => setLogin(login);
  const [password, setPassword] = useState('');
  const onChangePassword = password => setPassword(password);


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
  
});
