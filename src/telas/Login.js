import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';

import Capa from '../../assets/capa.jpg';
import Texto from '../components/Texto';
import InputBox from '../components/InputBox';
import Botao from '../components/Botao';


export default function Login() {
  
  const [login, setLogin] = useState('');
  const onChangeLogin = login => setLogin(login);
  const [password, setPassword] = useState('');
  const onChangePassword = password => setPassword(password);
  
  return (
    <>
      <SafeAreaView>
        <View style={ estilos.container }>
          <Texto>Nome: { login }</Texto>
          <TextInput
            label='Login'
            value={ login }
            onChangeText={ onChangeLogin }
            secureTextEntry={false}
            
          />
        <Texto>Senha: { password }</Texto>
        <TextInput
          label='Senha'
          value={ password }
          onChangeText={ onChangePassword }
          secureTextEntry={ true }
        />
        <Texto>Login: </Texto>
        <InputBox>Login</InputBox>
        <Texto>Senha: </Texto>
        <InputBox>Senha</InputBox>
        <Botao texto='Logar' style={ estilos.botao } onPress={ () => {} } />
      </View>
        
    </SafeAreaView>
    </>
  )
};

const estilos = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    padding: 20,
    margin: 10,
  },
  botao: {
    marginTop: 50,
  },

});
