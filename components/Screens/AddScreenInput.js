import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {useState} from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, ScrollView } from 'react-native';
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
      <ScrollView contentContainerStyle={{backgroundColor: 'pink', height: 1000}} scrollToOverflowEnabled={true} showsVerticalScrollIndicator={true} maximumZoomScale={0}>
        <View style={{height: 200, flex: 1}}>
          <Text>Add a New Bathroom</Text>
          <Text>By the way, we cross check your entry across our database to make sure there are no double entries</Text>
          <TextInput style={styles.textBox} placeholder='Bathroom Building'/>
          <TextInput style={styles.textBox} placeholder='Room #'/>
          <Text>What gender is this bathroom?</Text>
          <GenderRadio data={data} onSelect={(value) => setOption(value)}/>
          <View style={{flexDirection: 'row'}}>
            <Text>Rate Bathroom</Text>
            <BloodRadio data={dataRate} onSelect={(value) => setOption(value)}/>
          </View>
          <Text>What features does this bathroom have</Text>
          <FeaturesList/>
          <Text>Upload a Photo of Bathroom Assets</Text>
          <View style={styles.photoSection}>
            <View style={styles.photoHolder}>
              <Text>No Image Uploaded</Text>
            </View>
            <View>
              <GenericButton text={'Take Photo'}/>
              <GenericButton text={'Upload Photo'}/>
            </View>
          </View>
          <Text>Additional Comments</Text>
          <TextInput style={styles.comments} placeholder={'Please write any comments here'}/>
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
  ScrollView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //marginTop: '15%'
  },
  textBox: {
    borderWidth: 1,
    borderColor: 'black',
    height: 40,
    padding: 10,
    margin: 12,
    width: 200
  },
  photoSection: {
    flexDirection: 'row'
  },
  photoHolder: {
    backgroundColor: 'grey',
    borderWidth: 1,
    borderColor: 'black',
    width: 150,
    height: 90
  },
  comments: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '90%',
    height: '18%',
    padding: 10,
    alignItems: 'flex-end'
  },
});
