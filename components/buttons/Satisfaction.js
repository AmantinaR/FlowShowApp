import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useState } from "react";
import {MaterialCommunityIcons} from '@expo/vector-icons';

export default function Satisfaction(props) {
  const [selected, setSelected] = useState(false);
  if (props.emotion == "happy") {
    return(
      <TouchableOpacity onPress={() => setSelected(!selected)}>
        <MaterialCommunityIcons name={selected ? "emoticon" : 'emoticon-outline'} size={26} color='#E8A798'/>
        </TouchableOpacity>
    );
  } else if (props.emotion == "smile") {
    return(
      <TouchableOpacity onPress={() => setSelected(!selected)}>
        <MaterialCommunityIcons name={selected ? "emoticon-happy" : 'emoticon-happy-outline'} size={26} color='#E8A798'/>
        </TouchableOpacity>
    );
  } else if (props.emotion == "neutral") {
    return(
      <TouchableOpacity onPress={() => setSelected(!selected)}>
        <MaterialCommunityIcons name={selected ? "emoticon-neutral" : 'emoticon-neutral-outline'} size={26} color='#E8A798'/>
        </TouchableOpacity>
    );
  } else if (props.emotion == "sad") {
    return(
      <TouchableOpacity onPress={() => setSelected(!selected)}>
        <MaterialCommunityIcons name={selected ? "emoticon-sad" : 'emoticon-sad-outline'} size={26} color='#E8A798'/>
        </TouchableOpacity>
    );
  } else if (props.emotion == "angry") {
    return(
      <TouchableOpacity onPress={() => setSelected(!selected)}>
        <MaterialCommunityIcons name={selected ? "emoticon-angry" : 'emoticon-angry-outline'} size={26} color='#E8A798'/>
        </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    
  },
});
