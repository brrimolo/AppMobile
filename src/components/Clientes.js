import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

import Texto from './Texto';

export default function Clientes( clientes ) {

  const renderItem = ({ cpf, email, endereco, id, nome, senha, telefone }) => {
    return(
      <>
      <ScrollView>
        <View style={ estilos.lista } key={ id }>
          <Text style={ estilos.textoLista }>Nome:   { clientes.nome }</Text>
          <Text style={ estilos.textoLista }>E-mail: { clientes.email }</Text>
          <Text style={ estilos.textoLista }>Senha:  { clientes.senha }</Text>
        </View>
      </ScrollView>
      </>
    )
  }

  return (
    <>
      <FlatList
        data={ [clientes] }
        renderItem={ renderItem }
        keyExtractor={ ({ id }) => id }
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

