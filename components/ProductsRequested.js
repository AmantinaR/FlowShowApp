import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useState } from "react";
import FeatureButton from './buttons/FeatureButton';

export default function ProductsRequested(props) {
  return(
    <View style={styles.list}>
      <View style={styles.container}>
        <FeatureButton title='Pads' onSelect={props.onPress} tag="pads"/>
        <FeatureButton title='Tampons' onSelect={props.onPress} tag="tampons"/>
        <FeatureButton title='Condoms' onSelect={props.onPress} tag="condoms"/>
        <FeatureButton title='Plan B' onSelect={props.onPress}tag="planb"/>
        <FeatureButton title='Diapers' onSelect={props.onPress}tag="diapers"/>
        <FeatureButton title='Wipes' onSelect={props.onPress}tag="wipes"/>
        <FeatureButton title='Toilet Paper' onSelect={props.onPress}tag="tp"/>
        <FeatureButton title='Soap' onSelect={props.onPress}tag="soap"/>
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
