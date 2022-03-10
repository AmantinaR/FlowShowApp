import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useState } from "react";
import FeatureButton from './buttons/FeatureButton';

export default function FeatureList(props) {
  return(
    <View style={styles.list}>
      <View style={styles.container}>
        <FeatureButton title='Pads' onSelect={props.onSelect} tag='pads'/>
        <FeatureButton title='Free Products'onSelect={props.onSelect} tag='freepads'/>
        <FeatureButton title='Tampons'onSelect={props.onSelect} tag='tampons'/>
        <FeatureButton title='Single occupancy'onSelect={props.onSelect} tag='singleOcc'/>
        <FeatureButton title='Wipes'onSelect={props.onSelect} tag='wipes'/>
        <FeatureButton title='Condoms'onSelect={props.onSelect} tag='condoms'/>
        <FeatureButton title='Emergency Contraception'onSelect={props.onSelect} tag='emcon'/>
        <FeatureButton title='Diapers'onSelect={props.onSelect} tag='diapers'/>
        <FeatureButton title='Accessible'onSelect={props.onSelect} tag='accessible'/>
        <FeatureButton title='Clean'onSelect={props.onSelect} tag='clean'/>
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
    width: '95%'
  },
  list: {
    marginTop: 8.86
  }
});
