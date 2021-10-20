import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function Botao(props) {
  const { onPress, title='Logar' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'purple',
    marginTop: 50,
    height: 70,
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    //letterSpacing: 0.25,
    color: 'white',
  },
});
