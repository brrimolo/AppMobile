import React from 'react';
import { Component } from 'react';
import { Dimensions, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Button, DataTable } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class Cesta extends Component {

  state = {
    itensdocarrinho: [],
    valortotalcarrinho: 0
  }

  getCarrinho = () => {
    const url = window.servidor + '/item/carrinho'
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        this.setState({itensdocarrinho: data})
        console.log("Data Carrinho: ",data)
    })  
  }

  componentDidMount(){
    this.getCarrinho()
    this.getValorTotal()
  }

  getValorTotal = () => {

    const urlvalortotal = window.servidor + '/item/carrinho/valortotal'

    fetch(urlvalortotal)
    .then(response => response.json())
    .then(data => this.setState({valortotalcarrinho: data}))
  }

  render(){
    return (
      <>
        <SafeAreaView>
          <View style={estilos.container}>
            <DataTable style={estilos.datatableStilo}>
              <DataTable.Header>
                <DataTable.Title>Id</DataTable.Title>
                <DataTable.Title style={{flex: 3}}>Descrição</DataTable.Title>
                <DataTable.Title style={{flex: 3}}>Valor</DataTable.Title>
                <DataTable.Title>Qtde</DataTable.Title>
              </DataTable.Header>
              {this.state.itensdocarrinho && this.state.itensdocarrinho.map(item => {
                return (
                  <>
                    <DataTable.Row key={item[0]}>
                      <DataTable.Cell>{item[0]}</DataTable.Cell>
                      <DataTable.Cell style={{flex: 3}}>{item[1]}</DataTable.Cell>
                      <DataTable.Cell style={{flex: 3}}>R$ {item[3]}</DataTable.Cell>
                      <DataTable.Cell>{item[4]}</DataTable.Cell>
                    </DataTable.Row>
                  </>
                )
              })}
            </DataTable>
          </View>
          <View style={estilos.container}>
            <Text>Total: R$ {this.state.valortotalcarrinho}</Text>
          </View>
          <View style={estilos.viewBotoes}>
            <View style={estilos.botoes}><Button mode='contained'>Limpar</Button></View>
            <View style={estilos.botoes}><Button mode='contained'>Confirmar</Button></View>
            
            
          </View>
        </SafeAreaView>
      </>
    )

  }
}

const estilos = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "white",
    padding: 20,
    margin: 10,
    
  },
  viewBotoes: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "white",
    padding: 5,
    margin: 5,
  },
  botoes: {
    justifyContent: 'center',
    backgroundColor: "white",
    padding: 20,
    margin: 10,
  },
  datatableStilo: {
    margin: 10
  }
  
})