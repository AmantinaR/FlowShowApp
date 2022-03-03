import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useState } from "react";
import { FontAwesome5 } from '@expo/vector-icons';

export default function SearchBar(props) {
  return(
    <View style={styles.container}>
      <TextInput style={styles.textBox} placeholder='Enter a Location'
      onChangeText={(text) => props.setText(text)}/>
      <TouchableOpacity style={styles.search} onPress={props.onPress}>
        <FontAwesome5 name='search-location' size={30} color='white' />
      </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#FCC181',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    borderColor: "#E5E5E5",
    borderWidth: 1,
    width: '90%',
    height: '7%',
    margin: '1%'
  },
  textBox: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 5,
    height: '80%',
    padding: 5,
    width: '80%',
    backgroundColor: 'white',
    fontSize: 18
  },
  search: {
    paddingHorizontal: '4%',
    //width: 30
  }
});
