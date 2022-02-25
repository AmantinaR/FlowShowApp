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

export default function ReportTab({ navigation }) {
  const [option, setOption] = useState(null);
  const data = [
    { value: "Women's" },
    { value: "Gender Neutral" },
    { value: "Men's" },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Amara25's Profile</Text>
      <Text style={styles.manage}>You can manage your account info here</Text>
      <Image source={require('../../assets/Avatar.png')} style = {styles.avatar}/>
      <Text style = {styles.u_p}>Username: Amara25</Text>
      <Text style = {styles.u_p}>Password: ************</Text>
      <StatusBar style="auto" />
      <View style={{borderBottomColor: 'grey', borderBottomWidth:1, width: 326, top: '4%'}}>
      </View>
      <View style={{top: '8%', left: '-1%'}}>
      <Text style = {styles.preferences_text}>Bathroom Gender Preference</Text>
      <GenderRadio  data={data} onSelect={(value) => setOption(value)}/>
      </View>
      <View style = {styles.needs}>
      <Text style = {{top: '-10%', fontSize:'15'}}>Accessibility Needs</Text>
      <Image source={require('../../assets/needs.png')}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontWeight: 'bold',
    fontSize: 30,
    top: '-10%'
  },
  manage: {
    top: '-10%',
    color: 'grey'
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
    left: '-10%',
    top: '-10%'
  },
  needs: {
    top: '10%', 
    alignItems: 'center',
    margin: "1%"
  }

});
