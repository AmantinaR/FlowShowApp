import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


export default function ReportStatusBar(props) {
  return(
    <View style={styles.container}>
      <View style={styles.status}>
        <Text style={styles.text}>Report Submitted</Text>
        <FontAwesome name={'check-circle'} size={25} color={'#FCC181'}/>
      </View>
      <View style={styles.status}>
        <Text style={styles.text}>Manager Review</Text>
      </View>
      <View style={styles.status}>
        <Text style={styles.text}>Decision Made</Text>
      </View>
      <View style={styles.status}>
        <Text style={styles.text}>Results Posted</Text>
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
    flexDirection: 'row'
  },
  status: {
    alignItems: 'center',x
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Helvetica',
    fontSize: 10
  }
});
