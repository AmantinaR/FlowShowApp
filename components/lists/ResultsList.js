import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Location from '../Location';
import Images from '../../assets/LocationImages';
import DataList from './data/Default';




export default function ResultsList(props) {
  console.log(DataList);
  const Default = [
    {
      id: 0,
      miles : '50 ft',
      source : Images.Lathrop,
      name : 'Lathrop Library',
      address : '518 Memorial Way',
      number : '100',
      status : 'Open Now'
    },
    {
      id : 1,
      miles : '0.1 mi',
      source : Images.Lathrop,
      name : 'Language Corner',
      address : '450 Jane Stanford Way',
      number : '102',
      status : 'Open Now'
    },
    {
      id : 2,
      miles : '50 ft',
      source : Images.Lathrop,
      name : 'Lathrop Library',
      address : '518 Memorial Way',
      number : '100',
      status : 'Open Now'
    },
    {
      id : 3,
      miles : '50 ft',
      source : Images.Lathrop,
      name : 'Lathrop Library',
      address : '518 Memorial Way',
      number : '100',
      status : 'Open Now'
    },
    {
      id : 4,
      miles : '50 ft',
      source : Images.Lathrop,
      name : 'Lathrop Library',
      address : '518 Memorial Way',
      number : '100',
      status : 'Open Now'
    }
  ];

  const renderLocation = (location) => {
    return(
      <Location
        miles = {location.item.miles}
        source = {location.item.source}
        name = {location.item.name}
        address = {location.item.address}
        number = {location.item.number}
        status = {location.item.status}
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
    width: 375
  },
});
