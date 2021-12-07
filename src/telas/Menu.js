import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Login from './Login';
import Carrinho from './Carrinho';
import CadastroUsuario from './CadastroUsuario';
import GerenciarClientes2 from './GerenciarClientes2';
import Pagamento from './Pagamento';



const Drawer = createDrawerNavigator();

export default function Menu() {

  return(
    <NavigationContainer>
      
      <Drawer.Navigator
        initialRouteName={ titulos.item1 }
        drawerStyle={{
          backgroundColor: "#313131",
          paddingVertical: 20,
        }}
        screenOptions={{
          activeBackgroundColor: "#ffffff",
          inactiveTintColor: "#ffffff"
        }}>

        <Drawer.Screen 
          name={ titulos.item1 }
          component={ Login }
          options={{
            drawerLabel: (({focused}) => <Text style={{color: focused ? foco : cinza }}>{ titulos.item1 }</Text>),
            drawerIcon: (({focused}) => <Icon color={focused ? foco : branco } name={ icones.iconLogin } />),
          }} 
          />

        <Drawer.Screen
          name={ titulos.item2 }
          component={ CadastroUsuario }
          options={{
            drawerLabel: (({focused}) => <Text style={{color: focused ? foco : cinza }}>{ titulos.item2 }</Text>),
            drawerIcon: (({focused}) => <Icon color={focused ? foco : branco } name={ icones.iconCadastro } />),
          }} 
        />

        <Drawer.Screen
          name={ titulos.item3 }
          component={ Pagamento }
          options={{
            drawerLabel: (({focused}) => <Text style={{color: focused ? foco : cinza }}>{ titulos.item3 }</Text>),
            drawerIcon: (({focused}) => <Icon color={focused ? foco : branco } name={ icones.iconClientes } />),
          }}
        />

        <Drawer.Screen
          name={ titulos.item4 }
          component={ GerenciarClientes2 }
          options={{
            drawerLabel: (({focused}) => <Text style={{color: focused ? foco : cinza }}>{ titulos.item4 }</Text>),
            drawerIcon: (({focused}) => <Icon color={focused ? foco : branco } name={ icones.iconClientes } />),
          }}
        />
        <Drawer.Screen
          name={ titulos.item5 }
          component={ Carrinho }
          options={{
            drawerLabel: (({focused}) => <Text style={{color: focused ? foco : cinza }}>{ titulos.item5 }</Text>),
            drawerIcon: (({focused}) => <Icon color={focused ? foco : branco } name={ icones.iconCarrinho } />),
          }}
        />

      </Drawer.Navigator>
    </NavigationContainer>
    
  )
}

const foco = "313131";
const cinza = "#969696";
const branco = "#ffffff";

const titulos = {
  item1: "Login",
  item2: "Cadastro de Usuário",
  item3: "Pagamento",
  item4: "Gerenciar Clientes",
  item5: "Carrinho",
  item6: "Teste 3",
  item7: "Teste 4",
}

const icones = {
  iconLogin: "login",
  iconCarrinho: "shopping-cart",
  iconClientes: "groups",
  iconCadastro: "person",

}
