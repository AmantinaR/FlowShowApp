import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, Pressable, Image } from 'react-native';
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import BloodRating from './bloodStatic/BloodRating';

export default function Rating(props) {
  return(
    <View style={[styles.container, styles.shadow]}>
      <View>
        <View style={styles.topFlex}>
          <BloodRating number = {props.number} small={true}/>
          <Text style={styles.date}>{props.date}</Text>
        </View>
        <View style={styles.textFlex}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.description}>{props.description}</Text>
        </View>
        <View>
          <View style={styles.line}></View>
        </View>
        <View style={styles.userFlex}>
          <Text style={styles.user}>{props.user}</Text>
        </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 240,
    height: 190,
    backgroundColor: 'white',
    marginHorizontal: 10

  },
  shadow: {
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 5} ,
    shadowOpacity: .3,
    shadowRadius: 5,
  },
  topFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '4%'
  },
  textFlex: {
    justifyContent: 'space-between',
    height: '42%',
    marginBottom: '3%',
  },
  userFlex: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: '3%'
  },
  line: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    width: 50,
  },
  user: {
    fontWeight: 'bold',
    fontFamily: 'Helvetica'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Helvetica'
  },
  description: {
    fontSize: 12,

  },
  date: {
    fontWeight: '300',
    fontSize: 10
  }
});
