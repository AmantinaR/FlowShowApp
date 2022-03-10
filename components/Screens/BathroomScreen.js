import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {useState} from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, Image, ImageBackground, TouchableOpacity, Linking, ScrollView } from 'react-native';
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
import { Dimensions } from 'react-native';

export default function BathroomScreen({ navigation, route, ratings}) {
  const windowWidth = Dimensions.get('window').width;
  const params = route.params;
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={{height: 900, marginTop: '4%', maxWidth: windowWidth}} showsVerticalScrollIndicator={true} >
    <View style={{flex: 1, alignItems: 'center', padding: 4}}>
      <ImageBackground source={params.source} style={styles.imagebkd} imageStyle={styles.image} >
        <View style={styles.titleCard}>
          <Text style={styles.nameText}>{params.name}</Text>
          <Text style={styles.numberText}>Floor {params.number}</Text>
          <View style ={{flexDirection: 'row'}}>
            <Text style={[styles.numberText, {left:143, marginTop:'0.5%'}]}>({(ratings[params.id]).length})</Text>
            <View style={styles.blood}>
              <BloodRating number={params.locationRating} small={false}/>
            </View>
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
      <View style={{width: '92%', flexDirection: 'column', justifyContent: 'flex-start', marginTop: '10%', marginBottom: '2%'}}>
        <Text style={[styles.text, {textAlign: 'left'}]}>Features</Text>
        <Text style={[styles.clarify, {textAlign: 'left', marginTop: '0.5%'}]}>Displayed features based on aggregated ratings</Text>
      </View>
      <View style={styles.features}>
        {params.accessible !== Images.False ? <Image style={{margin: 4}} source={params.accessible}/> : undefined}
        {params.gNeutral !== Images.False ? <Image style={{margin: 4}} source={params.gNeutral}/> : undefined}
        {params.freePads !== Images.False ? <Image style={{margin: 4}} source={params.freePads}/> : undefined}
        {params.tampons !== Images.False ? <Image style={{margin: 4}} source={params.tampons}/> : undefined}
        {params.clean !== Images.False ? <Image style={{margin: 4}} source={params.clean}/> : undefined}
        {params.diapers !== Images.False ? <Image style={{margin: 4}} source={params.diapers}/> : undefined}
        {params.condoms !== Images.False ? <Image style={{margin: 4}} source={params.condoms}/> : undefined}
        {params.emcon !== Images.False ? <Image style={{margin: 4}} source={params.emcon}/> : undefined}
        {params.wipes !== Images.False ? <Image style={{margin: 4}} source={params.wipes}/> : undefined}
        {params.pads !== Images.False ? <Image style={{margin: 4}} source={params.pads}/> : undefined}
      </View>
      <View style={{width: '92%', flexDirection: 'column', justifyContent: 'flex-start', marginTop: '10%', marginBottom: '3%'}}>
        <Text style={[styles.clarify, {textAlign: 'left', marginTop: '0.5%'}]}>Swipe through previous ratings!</Text>
      </View>
      {console.log(ratings[params.id])}
      {console.log(ratings)}
      {console.log(params.id)}
      <RatingList data={ratings[params.id]}/>
      <View style={styles.lowerButtons}>
        <GenericButton text={"Rate"} params={params} onPress={() => navigation.navigate('Rate', params)}/>
        <GenericButton text={"Report"} params={params} onPress={() => navigation.navigate('Report', { screen: 'Input' })}/>
      </View>
    </View>
    </ScrollView>
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
    height: '25%',
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
  clarify: {
    color: 'grey',
    marginTop: '3%',
    fontFamily: 'Helvetica',
    fontSize: 12,
  },
  features: {
    flexDirection: 'row',
    width: '95%',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '1%'
  },
  buttonFlex: {
    backgroundColor: '#FCC181',
    flexDirection: 'row',
    margin: 10,
    width: 101
  },
  lowerButtons: {
    flexDirection: 'row',
    marginTop: '-10%',
    marginBottom: '5%'
  },
  blood: {
    left:-27,
    justifyContent: 'flex-start'
  },
  titleCard: {
    marginBottom: 0,
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
