import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useState } from "react";
import FeatureButton from './buttons/FeatureButton';

export default function FeatureList(props) {
  return(
    <View style={styles.list}>
      <View style={styles.container}>
        <FeatureButton title='Pads' onSelect={props.onSelect}/>
        <FeatureButton title='Free Pads'onSelect={props.onSelect}/>
        <FeatureButton title='Tampons'onSelect={props.onSelect}/>
        <FeatureButton title='Single occupancy'onSelect={props.onSelect}/>
        <FeatureButton title='Wipes'onSelect={props.onSelect}/>
        <FeatureButton title='Condoms'onSelect={props.onSelect}/>
        <FeatureButton title='Emergency Contraception'onSelect={props.onSelect}/>
        <FeatureButton title='Diapers'onSelect={props.onSelect}/>
        <FeatureButton title='Accessible'onSelect={props.onSelect}/>
        <FeatureButton title='Clean'onSelect={props.onSelect}/>
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
    flexWrap: 'wrap',
    width: '100%'
  },
  list: {
    marginTop: 8.86
  }
});
