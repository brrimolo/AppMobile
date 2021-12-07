import React from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import { SafeAreaView, StatusBar } from 'react-native';
import { expo as appName } from './app.json';
import Login from './src/telas/Login';

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

const Root = () => (
  <StoreProvider>
    <Menu />
  </StoreProvider>
);

AppRegistry.registerComponent(appName.name, () => Root);

const Router = () => {
  const [ store ] = useStore()
  return store.token ? <Menu /> : <Login />

}