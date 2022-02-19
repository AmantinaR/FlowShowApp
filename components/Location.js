import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, Pressable, Image } from 'react-native';
import { useState } from "react";

export default function Location(props) {
  return(
    <TouchableOpacity style={styles.container}>
      <View style={styles.distanceTextFlex}>
        <Text style={styles.miles}>{props.miles}</Text>
        <Text style={styles.text}>away from you</Text>
      </View>
      <View style={styles.mainFlex}>
        <Image style={styles.picture} source={props.source}/>
        <View style={styles.detailsFlex}>
          <Text style={styles.text}>{props.name}</Text>
          <Text style={styles.text}>{props.address}</Text>
          <Text style={styles.text}>{props.number}</Text>
          <Text style={styles.open}>{props.status}</Text>
        </View>
      </View>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    width: 200
  },
  distanceTextFlex: {
    flexDirection: 'row',
  },
  mainFlex: {
    flexDirection: 'row',
  },
  picture: {
    borderRadius: 8,
  },
  detailsFlex: {
    alignItems: 'flex-start',
  },
  miles: {
    fontWeight: 'bold',
  },
  open: {
    fontWeight: 'bold',
    color: 'pink'
  },
  text: {
    fontSize: 10
  },
});
