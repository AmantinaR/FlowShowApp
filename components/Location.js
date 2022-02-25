import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, Pressable, Image } from 'react-native';
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';

export default function Location(props) {
  const navigation = useNavigation();
  return(
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(props.list, props)}>
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
    justifyContent: 'space-around',
    width: 350,
    marginVertical: 5,
    borderBottomColor: '#F1F2F3',
    paddingVertical: 5,
    borderBottomWidth: 3
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
    fontSize: 10,

  },
});
