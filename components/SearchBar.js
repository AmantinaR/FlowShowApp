import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useState } from "react";
import { FontAwesome5 } from '@expo/vector-icons';

export default function SearchBar(props) {
  return(
    <View style={styles.container}>
      <TextInput style={styles.textBox} placeholder='Enter a Location'/>
      <TouchableOpacity style={styles.search}>
        <FontAwesome5 name='search-location' size={16} color='white' />
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
    width: 365,
    margin: 9
  },
  textBox: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 5,
    height: 40,
    padding: 10,
    width: 308,
    backgroundColor: 'white'
  },
  search: {
    paddingHorizontal: 20,
    height: 40,
    justifyContent: 'center'
    //width: 30
  }
});
