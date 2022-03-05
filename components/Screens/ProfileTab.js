import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {useState} from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GenderRadio from '../buttons/GenderRadio';
import Rating from '../Rating';
import RatingList from '../lists/RatingList';
import RatingData from '../lists/data/DefaultRating';
import GenericButton from '../buttons/GenericButton';

export default function ProfileTab({ route, navigation, user, ratings }) {
  console.log(navigation);
  console.log(route);
  console.log(ratings);
  const [option, setOption] = useState(null);
  const data = [
    { value: "Women's" },
    { value: "Gender Neutral" },
    { value: "Men's" },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={{marginBottom: '10%', alignItems: 'center'}}>
        <View style = {{flexDirection: 'row'}}>
        </View>
        <Text style={styles.manage}>You can manage your account info here</Text>

      </View>
      <StatusBar style="auto" />
      <View style={{marginTop: '10%'}}>
      <Text style = {styles.preferences_text}>Bathroom Gender Preference</Text>
      <GenderRadio  data={data} onSelect={(value) => setOption(value)}/>
      </View>
      <View style = {styles.needs}>
      <Text style = {{fontSize:15, marginBottom: '3%'}}>Accessibility Needs</Text>
      <Image source={require('../../assets/needs.png')}/>
      </View>
      <View style= {{marginTop: '40%'}}>
        <GenericButton text={'Log Out'} onPress={() => navigation.navigate('Landing')}/>
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
    padding: 30
  },
  header: {
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'Helvetica'
  },
  manage: {
    color: 'grey',
    marginTop: '3%',
    fontFamily: 'Helvetica'
  },
  avatar: {
    top: '-5%',
    width: 150,
    height: 150
  },
  u_p: {
    fontSize: 15,
    alignItems: 'center',
  },
  preferences_text: {
    fontSize: 15,
    left: '-3%',
    marginBottom: '3%',
    fontFamily: 'Helvetica'
  },
  needs: {
    //top: '10%',
    fontFamily: 'Helvetica',
    alignItems: 'center',
    margin: "2%"
  }

});
