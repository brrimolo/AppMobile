import React from 'react';
import { TextInput } from 'react-native';

const Input = () => {
  const [text, setText] = React.useState('');

  return (
    <TextInput
      value={ text }
      onChangeText={ text => setText(text) }
    />
  );
};

export default Input;
