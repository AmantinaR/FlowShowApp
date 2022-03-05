import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, Pressable, Image } from 'react-native';
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


export default function HalfBlood({small}) {
  let width = 0;
  let height = 0;
  let half = 0;
  let size = 0;
  if (small) {
    width = 20;
    height = 20;
    size = 15;
    half = 10;
  } else {
    width = 24;
    height = 24;
    size = 19;
    half = 12;
  }
  return(
    <View style={[styles.container, {width: width, height: height}]}>
      <View style={[styles.grey, {width: half, height: height}]}></View>
      <View style={styles.icon}>
        <Ionicons name='water-sharp' size={size} color={'white'} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#DA4949',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
    borderRadius: 4
  },
  grey: {
    backgroundColor: '#D3D3D3',
    position: 'relative',
    left: 6,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4
  },
  icon: {
    position: 'absolute',
  }

});
