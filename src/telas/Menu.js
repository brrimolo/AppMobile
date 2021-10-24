import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Login from './Login';
import Cesta from './Cesta';
import GerenciarClientes from './GerenciarClientes';

const Drawer = createDrawerNavigator();

export default function Menu() {

  return(
    
    <NavigationContainer>
      
      <Drawer.Navigator
        initialRouteName='Login'
        drawerStyle={{
          backgroundColor: "#313131",
          paddingVertical: 20,
        }}
        drawerContentOptions={{
          activeBackgroundColor: "#fff",
          inactiveTintColor: "#fff"
        }}>

        <Drawer.Screen 
          name='Login'
          component={ Login }
          options={{
            title: 'Home',
            drawerLabel: (({focused}) => <Text style={{color: focused ? '#313131' : '#969696' }}>Login</Text>),
            drawerIcon: (({focused}) => <Icon color={focused ? '#313131' : '#fff' } name="login" />)
          }}
        />

        <Drawer.Screen
          name='Cesta'
          component={ Cesta }
          options={{
            drawerLabel: (({focused}) => <Text style={{color: focused ? '#313131' : '#969696' }}>Cesta</Text>),
            drawerIcon: (({focused}) => <Icon color={focused ? '#313131' : '#fff' } name="shopping-cart" />),
          }} 
        />

        <Drawer.Screen
          name='Gerenciar Clientes'
          component={ GerenciarClientes }
          options={{
            drawerLabel: (({focused}) => <Text style={{color: focused ? '#313131' : '#969696' }}>Gerenciar Clientes</Text>),
            drawerIcon: (({focused}) => <Icon color={focused ? '#313131' : '#fff' } name="groups" />),
          }}
        />

      </Drawer.Navigator>
    </NavigationContainer>
    
  )
}

const estilos = StyleSheet.create({

  dstyle: {
    backgroundColor: '#313131',
    paddingVertical: 20,
  },

  dcontent: {
    activeBackgroundColor: '#fff',
    inactiveTintColor: '#fff',
  },

});