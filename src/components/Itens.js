import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

import Texto from './Texto';

export default function Itens( { titulo, itens } ) {

  const renderItem = ({ item: { nome, tel }}) => {
    return(
      <>
      <ScrollView>
        <View style={ estilos.lista } key={ nome }>
          <Text style={ estilos.textoLista }>{ nome }</Text>
          <Text style={ estilos.textoLista }>{ tel }</Text>
        </View>
      </ScrollView>
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
      />
    </>
  );
}

const estilos = StyleSheet.create({
  lista: {
    margin: 10,
    paddingVertical: 5,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },

  textoLista: {
    textAlign: 'left',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'normal',
    padding: 5,
  },

  titulo: {
    textAlign: 'center',
  },

});

