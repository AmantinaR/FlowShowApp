import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useState } from "react";

export default function FeatureButton(props) {
  const [selected, setSelected] = useState(false);
  return(
    <TouchableOpacity
        onPress={() => setSelected(!selected)}
        style={{ backgroundColor: selected ? "rgba(233, 167, 152, 100)" : "transparent", borderColor: '#E8A798', borderWidth: 1, borderRadius: 8, paddingVertical: 8,
        paddingHorizontal: 6, marginHorizontal: 4.43 }}
      >
        <Text style={{color: selected ? "white" : "#E8A798", fontSize: 8.87}}>{props.title}</Text>
      </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 6,
  },
  btnPressed: {
    backgroundColor: 'black',
  },
  btnIdle: {
    backgroundColor: 'white',
  },
  text: {
    fontSize: 8.87
  }
})
