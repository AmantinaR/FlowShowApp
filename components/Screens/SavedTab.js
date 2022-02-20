import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ResultsList from '../lists/ResultsList'
import Default from '../lists/data/Default';
import Location from '../Location';
import Images from '../../assets/LocationImages';

export default function SavedTab({ navigation }) {
  console.log(Default);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Saved Tab, only one screen so create flatlist here</Text>
      <ResultsList data = {Default}/>
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
  headerText: {

  }
});
