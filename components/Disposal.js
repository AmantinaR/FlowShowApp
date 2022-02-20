import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useState } from "react";
import FeatureButton from './buttons/FeatureButton';

export default function ProductsRequested(props) {
  return(
    <View style={styles.list}>
      <View style={styles.container}>
        <FeatureButton title='Napkin Bin'/>
        <FeatureButton title='In-Stall Trash Can'/>
        <FeatureButton title='Out-of-Stall Trash Can'/>
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
    marginBottom: 8.86
  },
  list: {
    marginTop: 8.86
  }
});
