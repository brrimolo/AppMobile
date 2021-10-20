import React from "react";
import { TextInput } from 'react-native-paper';

export default function Texto( { children } ) {
  
  const [text, setText] = React.useState('');

  var visivel = false;
  if ( children === 'Senha') {
    visivel = true;
  };

  return (
    <>
      <TextInput 
        mode ={ estilo }
        label={ children }
        value={ text }
        onChangeText={ text => setText(text) }
        secureTextEntry= { visivel }
      />
    </>
  )
}

const estilo = 'flat';