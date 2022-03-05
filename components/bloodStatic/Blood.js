import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, Pressable, Image } from 'react-native';
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


export default function Blood({color, small}) {
  let width = 0;
  let height = 0;
  let size = 0;
  if (small) {
    width = 20;
    height = 20;
    size = 15;
  } else {
    width = 24;
    height = 24;
    size = 19;
  }
  return(
    <View style={[styles.container, {backgroundColor: color, width: width, height: height}]}>
      <Ionicons name='water-sharp' size={size} color={'white'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
    borderRadius: 4
  },

});
