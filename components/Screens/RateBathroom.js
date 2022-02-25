import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {useState} from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GenderRadio from '../buttons/GenderRadio';
import FeaturesList from '../FeaturesList';
import GenericButton from '../buttons/GenericButton';
import BloodRadio from '../buttons/BloodRadio';



export default function RateScreen({ navigation, route }) {
  const params = route.params;
  const [option, setOption] = useState(null);
  const data = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={params.source} style={styles.imagebkd} imageStyle={styles.image} >
        <Text style={styles.nameText}>{params.name}</Text>
        <Text style={styles.numberText}>Bathroom {params.number}</Text>
      </ImageBackground>
      <Text>Rate Bathroom</Text>
      <BloodRadio data={data} onSelect={(value) => setOption(value)}/>
      <Text>Features</Text>
      <FeaturesList/>
      <Text>Upload a Photo of Bathroom Assets</Text>
      <View style={styles.photoSection}>
        <View style={styles.photoHolder}>
          <Text>No Image Uploaded</Text>
        </View>
        <View>
          <GenericButton text="Take Photo"/>
          <GenericButton text="Upload Photo"/>
        </View>

      </View>
      <TextInput style={styles.comments} placeholder={'Please write any comments here'}/>
      <Text> done button here, take to confirm page?</Text>
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
  comments: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '90%',
    height: '18%',
    padding: 10,
    alignItems: 'flex-end'
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
  }
});
