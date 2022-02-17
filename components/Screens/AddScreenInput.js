import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function AddScreenInput({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Add Screen Input</Text>
      <TextInput style={styles.textBox} placeholder='Bathroom Building'/>
      <TextInput style={styles.textBox} placeholder='Room #'/>
      <Text>What gender is this bathroom?</Text>
      <Text>Rate Bathroom</Text>
      <Text>What features does this bathroom have</Text>
      <Text>Upload a Picture of a Bathroom Assets</Text>
      <Text>Additional Comments</Text>
      <Button title="Add Bathroom" onPress={() => navigation.navigate('Confirm')}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBox: {
    borderWidth: 1,
    borderColor: 'black',
    height: 40,
    padding: 10,
    margin: 12,
    width: 200
  }
});
