import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Location from '../Location';


const renderLocation = (location) => {
  return(
    <Location
      miles = {location.miles}
      source = {location.source}
      name = {location.name}
      address = {location.address}
      number = {location.number}
      status = {location.status}
    />);
}

export default function ResultsList({data}) {
  return (
    <FlatList
        data = {data}
        renderItem={(location) => renderLocation(location)}
        style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#F9F9F9',
    //alignItems: 'center',
    //justifyContent: 'center',
    borderRadius: 17,
    borderColor: 'black',
    borderWidth: 1,
    width: 300
  },
});
