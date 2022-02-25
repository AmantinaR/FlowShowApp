import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Location from '../Location';
import Images from '../../assets/LocationImages';
import DataList from './data/Default';




export default function SavedList(props) {

  const renderLocation = (location) => {
    return(
      <Location
        miles = {location.item.miles}
        source = {location.item.source}
        name = {location.item.name}
        address = {location.item.address}
        number = {location.item.number}
        status = {location.item.status}
        list = {'Saved'}
        locationRating = {location.item.locationRating}
      />);
  }

  return (
    <View style={styles.container}>
    <FlatList
        data = {props.data}
        renderItem={(location) => renderLocation(location)}
        keyExtractor={(location) => location.id}

    />
    </View>
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
    width: 375,
  },
});
