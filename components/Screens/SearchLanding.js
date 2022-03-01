import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import FeatureButton from '../buttons/FeatureButton';
import FeatureList from '../FeaturesList';
import SearchBar from '../SearchBar';
import Default from '../lists/data/Default.js';
import ResultList from '../lists/ResultsList';
import FeatureButtonList from '../lists/FeatureButtonList';
import { useState } from 'react';

export default function SearchLanding({ navigation }) {
  const featurenames = [
    {
      id : 0,
      title:'Pads'
    },
    {
      id : 1,
      title:'Free Pads'
    },
    {
      id : 2,
      title:'Tampons'
    },
    {
      id : 3,
      title:'Single occupancy'
    },
    {
      id : 4,
      title:'Wipes'
    },
    {
      id : 5,
      title:'Condoms'
    },
    {
      id : 6,
      title:'Plan B'
    },
    {
      id : 7,
      title:'Diapers'
    },
    {
      id : 8,
      title:'Accessible'
    },
    {
      id : 9,
      title:'Clean'
    }
  ];
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar/>
      <StatusBar style="auto" />
      <MapView
        initialRegion={{
          latitude: 37.427238,
          longitude: -122.168587,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }} style={styles.map}
        >
          <Marker coordinate={{latitude: 37.4295238646884, longitude: -122.16790117770296}}
          image={require('../../assets/current-location.png')}/>
          {Default.map((item) => {
            return(
              <Marker coordinate = {{latitude: item.lat, longitude: item.lng}}
              title={item.name}/>
            );
          })}
        </MapView>
        <FeatureButtonList data={featurenames}/>
        <ResultList data = {Default}/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',

  },
  map: {
    width: 365,
    height: 350,
    borderRadius: 14,
    //top: -100.66
  }
});
