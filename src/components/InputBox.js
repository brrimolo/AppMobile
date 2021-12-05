import React from "react";
import { TextInput } from 'react-native-paper';

export default function Texto( props ) {
  
  const [ text, setText ] = React.useState('');
  const { onChangeText, value, style, label, keyboardType } = props;

  var visivel = false;
  if ( label.includes('Senha') || label.includes('senha')) {
    visivel = true;
  };

  return (
    <>
      <TextInput 
        mode={ modo }
        style={ style }
        label= { label }
        value={ value }
        keyboardType={ keyboardType }        
        onChangeText={ onChangeText }
        secureTextEntry= { visivel }
      />
    </>
  )
}

const modo = 'flat'; //'outlined'
