import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useState } from "react";
import FeatureButton from './buttons/FeatureButton';

export default function FeatureList(props) {
  return(
    <View style={styles.list}>
      <View style={styles.container}>
        <FeatureButton title='Pads'/>
        <FeatureButton title='Free Pads'/>
        <FeatureButton title='Tampons'/>
        <FeatureButton title='Single occupancy'/>
        <FeatureButton title='Wipes'/>
        <FeatureButton title='Condoms'/>
        <FeatureButton title='Emergency Contraception'/>
        <FeatureButton title='Diapers'/>
        <FeatureButton title='Accessible'/>
        <FeatureButton title='Clean'/>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 8.86,
    flexWrap: 'wrap'
  },
  list: {
    marginTop: 8.86
  }
});
