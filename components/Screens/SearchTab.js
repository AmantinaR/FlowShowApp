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
import RateConfirm from './RateConfirm';
import SavedButton from '../buttons/SavedButton';
import { useState } from 'react';

const SearchStack = createStackNavigator();

export default function SearchTab({ navigation, route, user, ratings, changeRatings }) {

  const changeSaved = () => {
    route.params.saved = !route.params.saved;
    console.log(route.params.saved);
  };

  // user={user} ratings={ratings}
  // changeRatings={(date, number, title, description) => changeRatings(date, number, title, description)}
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Landing" component={SearchLanding} options={{headerShown: false}}/>
      <SearchStack.Screen name="Bathroom" options={({ route, navigation }) =>({
        headerBackTitle: 'Back', headerTitle: 'Bathroom Details', headerRight: () => (

            <SavedButton savedProp={route.params.saved}/>
          ),})}>
          {props => <Bathroom {...props} ratings={ratings}/>}
      </SearchStack.Screen>
      <SearchStack.Screen name="Rate" component={Rate}/>
      <SearchStack.Screen name="RateConfirm" options={{headerTitle: "Rating Confirmation"}}>
        {props => <RateConfirm {...props} user={user} changeRatings={changeRatings}/>}
      </SearchStack.Screen>
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
