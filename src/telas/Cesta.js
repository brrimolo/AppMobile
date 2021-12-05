import React from 'react';
import { Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {  } from 'react-native-gesture-handler';

import Item from '../components/Item';
import Topo from '../../assets/capa.jpg';
import Texto from '../components/Texto';
import lista from '../mocks/gerenciarClientes';


export default function Cesta() {

  return (
    <>
    <SafeAreaView style={{ flex: 1 }}>
    <FlatList
      data={ lista.container.itens }
      renderItem={ Item }
      keyExtractor={ ({ nome }) => nome }
      ListHeaderComponent= { () => {
        return(
          <>
            <Image source={Topo} style={styles.topo} />
            <Text style={styles.titulo}> App Mobile </Text>
            <View style={styles.cesta}>
              <Texto>Cesta de Verduras</Texto>
              <Text style={styles.nomeFazenda}>Jenny Jack Farm</Text>
              <Text style={styles.preco}>40,00</Text>
            </View>
          </>
        )}}
    />
    </SafeAreaView>
    </>
  )
}

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({

  topo: {
    width: '100%',
    //height: 578 / 768 * width,
    height: '40%',
  },

  titulo: {
    width: '100%',
    position: 'absolute',
    textAlign: 'left',
    fontSize: 26,
    lineHeight: 26,
    color: 'purple',
    fontWeight: 'bold',
    padding: 30
  },

  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16
  },

  nome: {
    color: '#464646',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },

  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
  },

  descricao: {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
  },

  preco: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },

  

});