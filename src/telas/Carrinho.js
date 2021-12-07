import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Texto from '../components/Texto';
import Botao from '../components/Botao';

export default function Carrinho() {
  
  const [item, setItem] = useState([]);
  const onChangeItem = item => setItem([item]);

  var getJsonData = () => {
    const url = window.servidor + '/cliente/'
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        setItem([responseJson])
      })
      .catch((error) => {
        console.error
      })
  }

  return (
    <>
        <View>
          { item && item.map( descricao => {
            return (
              <View key={ descricao.id }>
                <Texto>{descricao.id}</Texto>
                <Texto>{descricao.nome}</Texto>
                <Texto>{descricao.cpf}</Texto>
                <Texto>{descricao.email}</Texto>
                <Texto>{descricao.senha}</Texto>
              </View>
            )}
          )}
        </View>
        <View>
          <Botao texto='Adicionar' style={ estilos.botao } onPress={ () => getJsonData() } />
        </View>
    </>
  )
};

const estilos = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    padding: 20,
    margin: 10,
  },
  botao: {
    marginTop: 50,
  },

});
