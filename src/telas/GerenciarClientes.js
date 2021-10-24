import React from 'react'
import { StyleSheet, View } from 'react-native';

import Itens from '../components/Itens';

import lista from '../mocks/gerenciarClientes'
import Botao from '../components/Botao';

export default function GerenciarClientes() {

    return (
    <>
        <View style={ estilos.tela }>
          <Itens { ...lista.container }/>
        </View>
        <View>
          <Botao texto='Adicionar' style={ estilos.botao } onPress={ () => {} } />
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

})
