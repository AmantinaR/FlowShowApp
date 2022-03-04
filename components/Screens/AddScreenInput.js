import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {useState} from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GenderRadio from '../buttons/GenderRadio';
import FeaturesList from '../FeaturesList';
import GenericButton from '../buttons/GenericButton';
import BloodRadio from '../buttons/BloodRadio';

export default function AddScreenInput({ navigation }) {
  const [option, setOption] = useState(null);
  const dataRate = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
  ];
  const data = [
    { value: "Women's" },
    { value: "Gender Neutral" },
    { value: "Men's" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{height: 1150, marginTop: '4%', padding: 7}} scrollToOverflowEnabled={true} showsVerticalScrollIndicator={true} maximumZoomScale={0}>
        <View style={{height: 200, flex: 1, alignItems: 'center'}}>
          <Text style = {styles.header}>Add a New Bathroom</Text>
          <Text style = {styles.disclaimer}>By the way, we cross check your entry across our database to make sure there are no double entries</Text>
          <View style={styles.textFlex}>
        <Text style={styles.text, {top: '1%'}}>Bathroom Building</Text>
        <TextInput style={styles.textBox} placeholder='Building Name' />
      </View>
      <View style={styles.textFlex}>
        <Text style={styles.text, {top: '1%'}}>Bathroom Room #</Text>
        <TextInput style={styles.textBox} placeholder='Room #'/>
      </View>
          <View style={{flexDirection: 'column', padding: 10, alignItems: 'center'}}>
            <Text style = {styles.txt, {margin: 10}}>What gender is assigned to this bathroom?</Text>
            <GenderRadio data={data} onSelect={(value) => setOption(value)}/>
          </View>
          <View style={{flexDirection: 'row', padding: 15, alignItems: 'center'}}>
            <Text style = {styles.txt}>Rate Bathroom: </Text>
            <BloodRadio data={dataRate} onSelect={(value) => setOption(value)}/>
          </View>
          <Text style = {styles.txt, {margin: 15}}>What features does this bathroom have?</Text>
          <FeaturesList/>
          <Text style = {styles.text, {margin: 15}}>Additional Comments</Text>
          <TextInput style={styles.comments} placeholder={'Please write any comments here (Optional)'}/>
          <GenericButton text={'Confirm'} onPress={() => navigation.navigate('Confirm')}/>
          <StatusBar style="auto" />
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
    //paddingTop: StatusBar.currentHeight
  },
  header: {
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'Helvetica'
  },
  disclaimer: {
    color: 'rgba(0, 0, 0, 0.5)',
    marginTop: '3%',
    fontFamily: 'Helvetica'
  },
  ScrollView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //marginTop: '15%'
  },
  textFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Helvetica'
  },
  textBox: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    height: 40,
    padding: 10,
    margin: 12,
    width: '40%',
    borderRadius: 4
  },
  photoSection: {
    flexDirection: 'row',
    padding: 1

  },
  photoHolder: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'black',
    alignItems: 'center',
    padding: '5%',
    marginTop: '3%',
    width: 150,
    height: 110
  },
  comments: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 4,
    width: '84%',
    height: '18%',
    padding: 10,
    marginTop: '5%'

  },
});
