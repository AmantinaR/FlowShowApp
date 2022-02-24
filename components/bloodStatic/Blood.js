import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, Pressable, Image } from 'react-native';
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


export default function Blood({color}) {

  return(
    <View style={[styles.container, {backgroundColor: color}]}>
      <Ionicons name='water-sharp' size={19} color={'white'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    height: 24,
    width: 24,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2
  },

});
