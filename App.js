import React from 'react';
import { StyleSheet} from 'react-native';
import { SafeAreaView, View } from 'react-native';

import Login from './src/telas/Login';
import mock from './src/mocks/login'
import Menu from './src/telas/Menu';

export default function App() {
  return (
    <Menu/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
