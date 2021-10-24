import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Topo from '../../assets/capa.jpg';
import Texto from '../components/Texto';

export default function Cesta() {

  return <>
    <Image source={Topo} style={styles.topo} />
    <Text style={styles.titulo}> App Mobile </Text>

    <View style={styles.cesta}>
      <Texto>Cesta de Verduras</Texto>
      <Text style={styles.nomeFazenda}>Jenny Jack Farm</Text>
      <Text style={styles.descricao}>
          Uma cesta com produtos selecionados
          cuidadosamente da fazenda direto
          para sua cozinha
      </Text>
      <Text style={styles.preco}>40,00</Text>
    </View>
    


    </>
}

const width = Dimensions.get('screen').width;

const styles = StyleSheet.create({

  topo: {
    width: '100%',
    //height: 578 / 768 * width,
    height: '80%',
  },

  titulo: {
    width: '100%',
    position: 'absolute',
    textAlign: 'left',
    fontSize: 26,
    lineHeight: 26,
    color: 'red',
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