import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Texto from './Texto';

export default function Item( { titulo, itens } ) {

  const renderItem = ({ item: { nome, tel }}) => {
    return(
      <>
      <View key={ nome }>
        <Text>{ nome }</Text>
        <Text>{ tel }</Text>
      </View>
      </>
    )
  }

  return (
    <>
      <Texto style={ estilos.titulo }> { titulo } </Texto>
      <FlatList
        data={ itens }
        renderItem={ renderItem }
        keyExtractor={ ({ nome }) => nome }
        style={ estilos.lista, estilos.textoLista }
      />
    </>
  );
}

const estilos = StyleSheet.create({
  lista: {
    margin: 10,
    paddingVertical: 16,
    paddingHorizontal: 32,
  },

  textoLista: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
  },

  titulo: {
    textAlign: 'center',
  },

});