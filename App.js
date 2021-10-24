import React from 'react';
import { StyleSheet} from 'react-native';
import { SafeAreaView, StatusBar } from 'react-native';

import Menu from './src/telas/Menu';

window.servidor = 'http://localhost:8080';

export default function App() {
  return (
    <SafeAreaView style={ estilos.container }>
      <StatusBar/>
      <Menu/>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
