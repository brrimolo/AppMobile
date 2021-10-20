import React from "react";
import { StyleSheet, Text } from 'react-native';

export default function Texto({ children, style }) {

  return <Text style={ [style, estilos.texto] }> { children } </Text>
}

const estilos =  StyleSheet.create({

  texto: {
    color: '#8143bf',
    marginTop: 15,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
})