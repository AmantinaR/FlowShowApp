import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {useState} from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, Image, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
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
  console.log(route);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={params.source} style={styles.imagebkd} imageStyle={styles.image} >
        <View style={styles.titleCard}>
          <Text style={styles.nameText}>{params.name}</Text>
          <Text style={styles.numberText}>Bathroom {params.number}</Text>
          <View style={styles.blood}>
            <BloodRating number={params.locationRating}/>
          </View>
        </View>

      </ImageBackground>
      <View style={styles.detailsFlex}>
        <View>
          <Text style={styles.text}>{params.address}</Text>
          <TouchableOpacity onPress={() => Linking.openURL("maps://app?daddr=" + params.lat + "+" + params.lng)}>
            <Text style={styles.open}>Open in Maps</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.distanceFlex}>
          <Text style={styles.distanceText}>{params.miles} away</Text>
          <Text style={styles.distanceText}>Open Now</Text>
        </View>
      </View>
      <View style={{width: '92%', flexDirection: 'row', justifyContent: 'flex-start', marginTop: '3%', marginBottom: '2%'}}>
        <Text style={[styles.text, {textAlign: 'left'}]}>Features</Text>
      </View>
      <View style={styles.features}>
        {params.accessible !== Images.False ? <Image source={params.accessible}/> : undefined}
        {params.gNeutral !== Images.False ? <Image source={params.gNeutral}/> : undefined}
        {params.freePads !== Images.False ? <Image source={params.freePads}/> : undefined}
        {params.tampons !== Images.False ? <Image source={params.tampons}/> : undefined}
        {params.clean !== Images.False ? <Image source={params.clean}/> : undefined}
        {params.diapers !== Images.False ? <Image source={params.diapers}/> : undefined}
        {params.condoms !== Images.False ? <Image source={params.condoms}/> : undefined}
        {params.planB !== Images.False ? <Image source={params.planB}/> : undefined}
        {params.wipes !== Images.False ? <Image source={params.wipes}/> : undefined}
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
    height: '33%',
    width: '92%',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    borderRadius: 5


  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 5

  },
  nameText: {

    color: 'white',
    fontFamily: 'Helvetica-Bold',
    fontSize: 24
  },
  numberText: {

    color: 'white',
    fontFamily: 'Helvetica',
    fontSize: 16

  },
  features: {
    flexDirection: 'row',
    width: '98%',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginBottom: '3%'
  },
  buttonFlex: {
    backgroundColor: '#FCC181',
    flexDirection: 'row',
    margin: 10,
    width: 101
  },
  lowerButtons: {
    flexDirection: 'row'
  },
  blood: {
    marginLeft: '-60%',
    justifyContent: 'flex-start'
  },
  titleCard: {
    marginBottom: '3%',
    //marginLeft: '3%',
    backgroundColor: 'rgba(0, 0, 0, 0.50)',
    padding: '3%',
    width: '100%'
  },
  saved: {
    width: '80%',
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  detailsFlex: {
    flexDirection: 'row',
    width: '92%',
    justifyContent: 'space-between',
    paddingHorizontal: '3%'
  },
  distanceFlex: {
    justifyContent: 'flex-start',
    paddingRight: 3
  },
  distanceText: {
    textAlign: 'right',
    fontSize: 16,
    fontFamily: 'Helvetica'
  },
  text: {
    fontSize: 16,
    fontFamily: 'Helvetica'
  },
  open: {
    color: "#FF8984",
    textDecorationLine: 'underline',
    fontSize: 16,
    fontFamily: 'Helvetica',

  }
});
