import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Item({ item: { nome, tel }}) {
  return (
    <>
      <ScrollView>
        <View style={ estilos.lista }>
          <Text style={ estilos.textoLista }>{ nome }</Text>
          <Text style={ estilos.textoLista }>{ tel }</Text>
        </View>
      </ScrollView>
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
});