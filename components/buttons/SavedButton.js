import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useState } from "react";
import { FontAwesome } from '@expo/vector-icons';

export default function SavedButton(props) {
  const [selected, setSelected] = useState(props.bathroom.saved);

  const SelectUpdate = () => {
    setSelected(!selected);
    console.log(props.bathroom.id + 'bathroom id');
    props.changeSaved({index: props.bathroom.id});

  };
  return(
    <TouchableOpacity
         style={{marginRight: '18%'}} onPress={()=> SelectUpdate()}>
        {selected ? <FontAwesome name='bookmark' size={24} color={'#FF8984'} /> : <FontAwesome name='bookmark-o' size={24} color={'#FF8984'} />}
      </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 6,
  },
  btnPressed: {
    backgroundColor: 'black',
  },
  btnIdle: {
    backgroundColor: 'white',
  },
  text: {
    fontSize: 8.87
  }
});
