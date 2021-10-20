import React from 'react';
import { StyleSheet} from 'react-native';
import { SafeAreaView, View } from 'react-native';

import Login from './src/telas/Login';
import mock from './src/mocks/login'

export default function App() {
  return (
    <>
      <SafeAreaView>
        <View style={ styles.container }>
          <Login {...mock}/>
        </View>
      </SafeAreaView>
    </>
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
