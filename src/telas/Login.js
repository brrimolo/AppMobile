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
        "email":this.state.email,
        "senha":this.state.senha
    }
    var requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(flogin)
    }

    if(this.state.TipoLogin === "funcionario"){
        var clogin = {
            "login":this.state.email,
            "senha":this.state.senha
        }
        var requestOption = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(clogin)
        }
        var url = window.servidor + '/funcionario/login'
        fetch(url,requestOption)
            .then(response => response.json())
            .then(data => this.setState({clienteLogin: data}) )
            .then(() => {
                let nomeUsuario = this.state.clienteLogin.nome;
                if(this.state.clienteLogin.nome==='null'){
                    sessionStorage.setItem('NomeLogin','null')
                    sessionStorage.setItem('IdUsuarioLogado','null')
                }else{
                    sessionStorage.setItem('NomeLogin',this.state.clienteLogin.nome)
                    sessionStorage.setItem('IdUsuarioLogado',this.state.clienteLogin.matricula)
                    toast.success('Benvindo '+ nomeUsuario)
                    sessionStorage.setItem('TipoDeLogin','funcionario')
                    this.setState({redirecionar: true})
                    window.location.reload()

                }
                
            })
    }
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
        <Text>Caso não tenha cadastro clique aqui:</Text>
        <Botao 
          texto='Cadastrar'
          style={ estilos.botao }
          onPress={ () => navigation.navigate('Cadastro de Usuário') }
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
