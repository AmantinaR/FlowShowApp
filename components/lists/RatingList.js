import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Location from '../Location';
import Images from '../../assets/LocationImages';
import RatingData from './data/DefaultRating';
import Rating from '../Rating';




export default function RatingList(props) {

  const renderRating = (rating) => {
    return(
      <Rating
        number = {rating.item.number}
        date = {rating.item.date}
        title = {rating.item.title}
        description = {rating.item.description}
        user = {rating.item.user}
      />);
  }

  return (

    <FlatList
        horizontal
        data = {props.data}
        renderItem={(rating) => renderRating(rating)}
        keyExtractor={(rating) => rating.id}
    />

  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 17,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
});
