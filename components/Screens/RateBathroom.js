import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {useState} from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, Image, ImageBackground, ScrollView } from 'react-native';
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
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const date = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  const fullDate = date + '-' + month + '-' + year;
  const data = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
  ];
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollView}>
      <ImageBackground source={params.source} style={styles.imagebkd} imageStyle={styles.image} >
        <View style={styles.titleCard}>
          <Text style={styles.nameText}>{params.name}</Text>
          <Text style={styles.numberText}>Floor {params.number}</Text>
        </View>

      </ImageBackground>
      <View style={{flexDirection: 'row', padding: 15, alignItems: 'center'}}>
      <Text style={styles.text}>Rate Bathroom(required):  </Text>
      <BloodRadio data={data} onSelect={(value) => setOption(value)}/>
      </View>
      <Text style={styles.text}>What features does this bathroom have?</Text>
      <FeaturesList onSelect={(selected, tag) => console.log(tag)}/>
      <View style={{flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'center'}}>
        <Text style={styles.text, {top: '1%', }}>Rating Title(required): </Text>
        <TextInput style={styles.textBox} placeholder='' onChangeText={(text) => setTitle(text)}/>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start', width: '80%', marginTop: '5%'}}>
      <Text>Rating Description (Optional)</Text>
      </View>
      <TextInput style={styles.comments} placeholder={'Please write any comments here (Optional)'} onChangeText={(descr) => setDescription(descr)}/>
      <GenericButton text={'Confirm'} onPress={() => {navigation.navigate('RateConfirm', {building: params, rating: option, title: title, description: description, date: fullDate})}}/>
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
  scrollView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 900,
    padding: 10
  },
  imagebkd: {
    height: '26%',
    width: '100%',
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
    flexDirection: 'row'
  },
  comments: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 4,
    width: '84%',
    height: '18%',
    padding: 10,
    marginTop: '1%',
    marginBottom: '3%'

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
  titleCard: {
    marginBottom: '3%',
    //marginLeft: '3%',
    backgroundColor: 'rgba(0, 0, 0, 0.50)',
    padding: '3%',
    width: '100%'
  },
  text: {
    fontSize: 16,
    fontFamily: 'Helvetica'
  },
  textBox: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    height: 40,
    padding: 10,
    margin: 10,
    width: '50%',
    borderRadius: 4
  },
});
