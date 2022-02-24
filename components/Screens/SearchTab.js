import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapView from 'react-native-maps';
import FeatureButton from '../buttons/FeatureButton';
import FeatureList from '../FeaturesList';
import SearchBar from '../SearchBar';
import SearchLanding from './SearchLanding';
import Bathroom from './BathroomScreen';
import Rate from './RateBathroom';

const SearchStack = createStackNavigator();

export default function SearchTab({ navigation }) {

  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Landing" component={SearchLanding} options={{headerShown: false}}/>
      <SearchStack.Screen name="Bathroom" component={Bathroom}/>
      <SearchStack.Screen name="Rate" component={Rate}/>
    </SearchStack.Navigator>
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
