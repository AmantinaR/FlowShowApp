import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, Pressable, Image } from 'react-native';
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Blood from './Blood';
import HalfBlood from './HalfBlood';


export default function BloodRating({number}) {
  if (number === 0) {

  } else if (number === 0.5) {
    return(
      <View style={styles.container}>
        <HalfBlood/>
        <Blood color='#D3D3D3'/>
        <Blood color='#D3D3D3'/>
        <Blood color='#D3D3D3'/>
        <Blood color='#D3D3D3'/>
      </View>
    );
  } else if (number === 1) {
    return(
      <View style={styles.container}>
        <Blood color='red'/>
        <Blood color='#D3D3D3'/>
        <Blood color='#D3D3D3'/>
        <Blood color='#D3D3D3'/>
        <Blood color='#D3D3D3'/>
      </View>
    );
  } else if (number === 1.5) {
    return(
      <View style={styles.container}>
        <Blood color='red'/>
        <HalfBlood/>
        <Blood color='#D3D3D3'/>
        <Blood color='#D3D3D3'/>
        <Blood color='#D3D3D3'/>
      </View>
    );
  } else if (number === 2) {
    return(
      <View style={styles.container}>
        <Blood color='red'/>
        <Blood color='red'/>
        <Blood color='#D3D3D3'/>
        <Blood color='#D3D3D3'/>
        <Blood color='#D3D3D3'/>
      </View>
    );
  } else if (number === 2.5) {
    return(
      <View style={styles.container}>
        <Blood color='red'/>
        <Blood color='red'/>
        <HalfBlood/>
        <Blood color='#D3D3D3'/>
        <Blood color='#D3D3D3'/>
      </View>
    );
  } else if (number === 3) {
    return(
      <View style={styles.container}>
        <Blood color='red'/>
        <Blood color='red'/>
        <Blood color='red'/>
        <Blood color='#D3D3D3'/>
        <Blood color='#D3D3D3'/>
      </View>
    );
  } else if (number === 3.5) {
    return(
      <View style={styles.container}>
        <Blood color='red'/>
        <Blood color='red'/>
        <Blood color='red'/>
        <HalfBlood/>
        <Blood color='#D3D3D3'/>
      </View>
    );
  } else if (number === 4) {
    return(
      <View style={styles.container}>
        <Blood color='red'/>
        <Blood color='red'/>
        <Blood color='red'/>
        <Blood color='red'/>
        <Blood color='#D3D3D3'/>
      </View>
    );
  } else if (number === 4.5) {
    return(
      <View style={styles.container}>
        <Blood color='red'/>
        <Blood color='red'/>
        <Blood color='red'/>
        <Blood color='red'/>
        <HalfBlood/>
      </View>
    );
  } else if (number === 5) {
    return(
      <View style={styles.container}>
        <Blood color='red'/>
        <Blood color='red'/>
        <Blood color='red'/>
        <Blood color='red'/>
        <Blood color='red'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

});
