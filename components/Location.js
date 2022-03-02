import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, Pressable, Image } from 'react-native';
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import BloodRating from './bloodStatic/BloodRating';

export default function Location(props) {
  const navigation = useNavigation();
  return(
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(props.list, props)}>
      <View style={styles.topRow}>
        <View style={styles.distanceTextFlex}>
          <Text style={styles.miles}>{props.miles}</Text>
          <Text style={styles.text}>away from you</Text>
        </View>
        <BloodRating number={props.locationRating} small={true}/>
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
    borderBottomWidth: 3,
  },
  distanceTextFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: '8%',
    marginLeft: '-3%',
    width: '45%'

  },
  mainFlex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '90%'
  },
  picture: {
    borderRadius: 8,
    width: 90,
    height: 90,
    marginRight: '2%'
  },
  detailsFlex: {
    alignItems: 'flex-start',
  },
  miles: {
    fontWeight: 'bold',
    fontSize: 16
  },
  open: {
    fontWeight: 'bold',
    color: '#FF8984'
  },
  text: {
    fontSize: 14,
    fontFamily: 'Helvetica',
    color: '#1D1F22'

  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    width: '90%'
  }
});
