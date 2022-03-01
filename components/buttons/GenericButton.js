import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export default function GenericButton(props) {
  if (props.text === 'Rate'){
    return(
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.buttonFlex}>
          <Ionicons name='water-sharp' size={19} color={'white'} />
          <Text>{props.text}</Text>
        </View>
      </TouchableOpacity>

    );
  } else if (props.text === 'Report'){
    return(
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.buttonFlex}>
          <Octicons name='report' size={19} color={'white'} />
          <Text>{props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  } else if (props.text === 'Take Photo'){
    return(
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.buttonFlex}>
          <Feather name='camera' size={19} color={'white'} />
          <Text>{props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  } else if (props.text === 'Upload Photo'){
    return(
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.buttonFlex}>
          <Feather name='image' size={19} color={'white'} />
          <Text>{props.text}</Text>
        </View>
      </TouchableOpacity>
    );
  } else if (props.text === 'Rate Next'){
    return(
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.buttonFlex}>
          <Text>Next</Text>
          <Feather name='chevron-right' size={19} color={'white'} />

        </View>
      </TouchableOpacity>
    );
  } else if (props.text === 'Confirm'){
    return(
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.buttonFlex}>
          <Text>Confirm</Text>
          <Feather name='chevron-right' size={19} color={'white'} />
        </View>
      </TouchableOpacity>
    );
  } else if (props.text === 'Report'){
    return(
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.buttonFlex}>
          <Octicons name='report' size={19} color={'white'} />
          <Text>REPORT A BATHROOM</Text>
        </View>
      </TouchableOpacity>
    );
  }


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
  buttonFlex: {
    backgroundColor: '#FCC181',
    flexDirection: 'row',
    margin: 10,
    borderRadius: 4,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 2,
    },
   shadowOpacity: 0.25,
   shadowRadius: 2,
  },
  btnIdle: {
    backgroundColor: 'white',
  },
  text: {
    fontSize: 8.87
  }
});
