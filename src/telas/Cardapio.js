import React, {useState, useEffect } from 'react';
import { Component } from 'react';
import {  View, StyleSheet, Dimensions } from 'react-native';
import { Button, List, Snackbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';


export default class  Cardapio extends Component {

    state = {
        itens: [],
        visible: false,
        textoSnack: '',
        qtdecarrinho: 0
    }

  
   getItens = () => {
    var url = window.servidor + '/item/'
    fetch(url)
        .then(response => response.json())
        .then((data) =>{
            this.setState({itens: data});
            console.log("DATA: ",this.state.itens);
        })
   }

   componentDidMount(){
       this.getItens();
   }

   GetTipoIcone = (item) => {
    if(item.tipoItem == "Alcoolica" || item.tipoItem=="NaoAlcoolica"){
        return "beer"
    }else{
        return "food-steak"
    }
   }
   
   DoAdicionarItemCarrinho = (item) => {
    const url = window.servidor + '/item/carrinho/add/'+item.id
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            this.setState({qtdecarrinho: data})
            sessionStorage.setItem('qtdecarrinho',this.state.qtdecarrinho)
            const texto = item.nome + ' adicionado ao carrinho.'
            this.setState({visible: true, textoSnack: texto})
        })
      
   }

   onDismissSnackBar = () => {
       this.setState({visible: false})
   }
 
    render(){
        return(
            <>
                <SafeAreaView>
                {this.state.itens && this.state.itens.map((item) => {
                    return (
                        <View style={ estilos.container }>
                            
                            <List.Item
                                title={item.nome}
                                description={"R$ "+item.valor}
                                left={props => <List.Icon {...props} icon={this.GetTipoIcone(item)}/>}
                                right={props => 
                                    <Button Style={estilos.botao} 
                                            labelStyle={estilos.botaoTexto}
                                            icon="plus" 
                                            mode='contained'
                                            compact="true"
                                            onPress={() => this.DoAdicionarItemCarrinho(item)}
                                            >add</Button>}
                            />
                            
                        </View>
                    )})
                }
                    <Snackbar
                        visible={this.state.visible}
                        onDismiss={this.onDismissSnackBar}
                        style={estilos.snackstyle}
                        action={{
                            label: 'Ok',
                            onPress: () => {
                                {this.onDismissSnackBar}
                            },
                        }}>
                        {this.state.textoSnack}
                    </Snackbar>
                </SafeAreaView>
            </>
        )
    }

}




const estilos = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "white",
        padding: 20,
        margin: 10,
    },
    botao: {
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 20,
        backgroundColor:'#8B008B',
    },
    botaoTexto:{
        textAlign: 'center',
        fontSize: 17,
    },
    snackstyle: {
        position: 'fixed',
        bottom: 0,
        backgroundColor:'#8B008B',
        
    }
});
