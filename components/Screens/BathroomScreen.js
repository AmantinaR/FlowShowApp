import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {useState} from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GenderRadio from '../buttons/GenderRadio';
import BloodRating from '../bloodStatic/BloodRating';
import RatingList from '../lists/RatingList';
import { Octicons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import GenericButton from '../buttons/GenericButton';
import SavedButton from '../buttons/SavedButton';

export default function BathroomScreen({ navigation, route }) {
  const params = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <SavedButton/>
      <ImageBackground source={params.source} style={styles.imagebkd} imageStyle={styles.image} >
        <Text style={styles.nameText}>{params.name}</Text>
        <Text style={styles.numberText}>Bathroom {params.number}</Text>
        <BloodRating number={params.locationRating}/>
      </ImageBackground>

      <Text>{params.miles}</Text>
      <Text>{params.address}</Text>
      <Text>{params.number}</Text>
      <Text>{params.status}</Text>
      <Text>Features</Text>
      <View style={styles.features}>
        <Image source={params.accessible}/>
        <Image source={params.gNeutral}/>
        <Image source={params.freePads}/>
        <Image source={params.tampons}/>
        <Image source={params.clean}/>
        <Image source={params.diapers}/>
        <Image source={params.condoms}/>
        <Image source={params.planB}/>
        <Image source={params.wipes}/>
      </View>
      <RatingList data={params.ratings}/>
      <View style={styles.lowerButtons}>
        <GenericButton text={"Rate"} params={params} onPress={() => navigation.navigate('Rate', params)}/>
        <GenericButton text={"Report"} params={params} onPress={() => navigation.navigate('Report', { screen: 'Input' })}/>

      </View>
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
  imagebkd: {
    height: '37%',
    width: '92%',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    borderColor: 'black',
    borderWidth: 1,


  },
  image: {
    height: '100%',
    width: '100%',

  },
  nameText: {
    marginLeft: 10,
    color: 'white'
  },
  numberText: {
    marginLeft: 10,
    color: 'white'
  },
  features: {
    flexDirection: 'row'
  },
  buttonFlex: {
    backgroundColor: '#FCC181',
    flexDirection: 'row',
    margin: 10,
    width: 101
  },
  lowerButtons: {
    flexDirection: 'row'
  }
});
