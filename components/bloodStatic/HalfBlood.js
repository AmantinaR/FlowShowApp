import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, Pressable, Image } from 'react-native';
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


export default function Blood() {

  return(
    <View style={styles.container}>
      <View style={styles.grey}></View>
      <View style={styles.icon}>
        <Ionicons name='water-sharp' size={19} color={'white'} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: 'red',
    height: 24,
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2
  },
  grey: {
    backgroundColor: '#D3D3D3',
    height: 24,
    width: 12,
    position: 'relative',
    left: 6
  },
  icon: {
    position: 'absolute',
  }

});
