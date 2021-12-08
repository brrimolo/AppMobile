import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Login from './Login';
import Cardapio from './Cardapio';
import Cesta from './Cesta';
import CadastroUsuario from './CadastroUsuario';
import GerenciarClientes from './GerenciarClientes';
import Pagamento from './Pagamento';


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
        screenOptions={{
          activeBackgroundColor: "#ffffff",
          inactiveTintColor: "#ffffff"
        }}>
        <Drawer.Screen 
          name='Login'
          component={ Login }
          options={{
            drawerLabel: (({focused}) => <Text style={{color: focused ? foco : cinza }}>Login</Text>),
            drawerIcon: (({focused}) => <Icon color={focused ? foco : branco } name='login' />),
          }} 
          />
        <Drawer.Screen
          name='Cadastro de Usuário'
          component={ CadastroUsuario }
          options={{
            drawerLabel: (({focused}) => <Text style={{color: focused ? foco : cinza }}>Cadastro de Usuário</Text>),
            drawerIcon: (({focused}) => <Icon color={focused ? foco : branco } name='person' />),
          }} 
        />
        <Drawer.Screen
          name='Cardapio'
          component={ Cardapio }
          options={ {
            drawerLabel: (({focused}) => <Text style={{color: focused ? '#313131' : '#969696' }}>Cardapio</Text>),
            drawerIcon: (({focused}) => <Icon color={focused ? '#313131' : '#fff' } name="fastfood" />),
          } } 
          
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
          name='Pagamento'
          component={ Pagamento }
          options={{
            drawerLabel: (({focused}) => <Text style={{color: focused ? foco : cinza }}>Pagamento</Text>),
            drawerIcon: (({focused}) => <Icon color={focused ? foco : branco } name='credit-card' />),
          }}
        />
        <Drawer.Screen
          name='Gerenciar Clientes'
          component={ GerenciarClientes }
          options={{
            drawerLabel: (({focused}) => <Text style={{color: focused ? '#313131' : '#969696' }}>Gerenciar Clientes</Text>),
            drawerIcon: (({focused}) => <Icon color={focused ? '#313131' : '#fff' } name='groups' />),
          }} 
        />
      </Drawer.Navigator>
    </NavigationContainer>
    
  )
}

const foco = "313131";
const cinza = "#969696";
const branco = "#ffffff";


