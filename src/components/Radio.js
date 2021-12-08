import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Radio( {sel, options=[], vertical=false, onChangeSelect} ) {
  const [selected, setSelected] = React.useState(0);
  return (
    <View style={ vertical? estilos.vertical : estilos.horizontal }>
      {
        options.map( (opt, index) => (
          
          <TouchableOpacity
            key={ index }
            onPress={ ()=> setSelected(index)} 
            style={ estilos.optContainer }>
              <View style={ estilos.outlineCircle }>
                { selected === index && <View style={ estilos.innerCircle } /> }
              </View>
              <Text style={ estilos.texto }>{ opt }</Text>
          </TouchableOpacity>
          
        ))
      }
    </View>
  );
};

const estilos = StyleSheet.create({
  vertical: {
    flexDirection: 'column',
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  outlineCircle:{
    width: 20,
    height: 20,
    borderRadius: 10,
    borderColor: '#777',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle:{
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'purple',
  },
  texto: {
    marginLeft: 10,
    color: '#8143bf',
    fontSize: 21,
    lineHeight: 42,
    fontWeight: 'bold',
  },
})