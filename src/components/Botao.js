import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Botao( props ) {
  
  const { texto, style, onPress } = props;

  return (
    <>
    <TouchableOpacity style={[estilos.botao, style]} onPress={ onPress }>
      <Text style={ estilos.textoBotao }>{ texto }</Text>
    </TouchableOpacity>
    </>
  );
}

const estilos = StyleSheet.create({
  botao: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: 'purple',
    height: 70,
  },
  textoBotao: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
  },
});
