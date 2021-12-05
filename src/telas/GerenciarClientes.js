import React from 'react'
import { StyleSheet, SafeAreaView, View } from 'react-native';

import Itens from '../components/Itens';

import lista from '../mocks/gerenciarClientes';
import Botao from '../components/Botao';

export default function GerenciarClientes() {
    return (
    <>
      <View style={ estilos.tela }>
        <Itens { ...lista.container }/>
      </View>

      <View style={ estilos.container }>
        <Botao texto='Logar' style={ estilos.botao } onPress={ () => {} } />
      </View>
    </>
  )
}

const estilos = StyleSheet.create( {
  botao: {
    margin: 30,
  },
  tela: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    padding: 20,
    margin: 10,
  },
})
