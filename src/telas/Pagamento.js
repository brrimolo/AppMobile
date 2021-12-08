import React from 'react';
import { StyleSheet, View } from 'react-native';

import Radio from '../components/Radio';
import Botao from '../components/Botao';

export default class Pagamento extends React.Component {

  render() {
    return (
      <>
        <View>
          <Radio 
            sel={ 0 }
            options={ ['Cartão','Dinheiro'] }
            vertical={ true }
            onChangeSelect={ (opt, index) => alert(index) }
          />
        </View>
        <View>
          <Botao texto='Finalizar' style={ estilos.botao } onPress={ () => alert('Seu pedido será enviado !') } />
        </View>
      </>
    );
  }
}

const estilos = StyleSheet.create( {
  botao: {
    margin: 30,
  },
  tela: {
    flex: 1,
  },

})
