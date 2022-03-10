import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useState } from "react";
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function Satisfaction(props) {
  if (props.emotion == "happy") {
    return(
      <TouchableOpacity style = {styles.container} onPress={props.onPress}>
        <MaterialCommunityIcons name={props.selected ? "emoticon" : 'emoticon-outline'} size={29} color='#E8A798'/>
        <Text style={styles.text}>Very Happy</Text>
        </TouchableOpacity>
    );
  } else if (props.emotion == "smile") {
    return(
      <TouchableOpacity style = {styles.container} onPress={props.onPress}>
        <MaterialCommunityIcons name={props.selected ? "emoticon-happy" : 'emoticon-happy-outline'} size={29} color='#E8A798'/>
          <Text style={styles.text}>Happy</Text>
        </TouchableOpacity>
    );
  } else if (props.emotion == "neutral") {
    return(
      <TouchableOpacity style = {styles.container} onPress={props.onPress}>
        <MaterialCommunityIcons name={props.selected ? "emoticon-neutral" : 'emoticon-neutral-outline'} size={29} color='#E8A798'/>
          <Text style={styles.text}>Neutral</Text>
        </TouchableOpacity>
    );
  } else if (props.emotion == "sad") {
    return(
      <TouchableOpacity style = {styles.container} onPress={props.onPress}>
        <MaterialCommunityIcons name={props.selected ? "emoticon-confused" : 'emoticon-confused-outline'} size={29} color='#E8A798'/>
          <Text style={styles.text}>Upset</Text>
        </TouchableOpacity>
    );
  } else if (props.emotion == "angry") {
    return(
      <TouchableOpacity style = {styles.container} onPress={props.onPress}>
        <MaterialCommunityIcons name={props.selected ? "emoticon-angry" : 'emoticon-angry-outline'} size={29} color='#E8A798'/>
          <Text style={styles.text}>Very Upset</Text>
        </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 7,
    width: 60
  },
  text: {
    fontSize: 10,
    fontFamily: 'Helvetica'
  },
});
