import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {useState} from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductsRequested from '../ProductsRequested';
import Disposal from '../Disposal';
import Satisfaction from '../buttons/Satisfaction';
import SatisfactionRadio from '../buttons/SatisfactionRadio';
import GenericButton from '../buttons/GenericButton';

export default function ReportInput({ navigation, route }) {
  const [building, setBuilding] = useState('');
  const [room, setRoom] = useState('');
  const [comment, setComment] = useState('');
  const [option, setOption] = useState(null);

  const data = [
    { value: "angry" },
    { value: "sad" },
    { value: "neutral" },
    { value: "smile" },
    { value: "happy" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color: 'rgba(0, 0, 0, 0.5)', fontFamily: 'Helvetica'}}>You tell us the issue(s), and we'll work with the building managers to solve them</Text>
      <View style={styles.textFlex}>
        <Text style={styles.text}>Bathroom Building</Text>
        <TextInput onChangeText={(building) => setBuilding(building)} style={styles.textBox} placeholder='Building Name' />
      </View>
      <View style={styles.textFlex}>
        <Text style={styles.text}>Bathroom Room #</Text>
        <TextInput onChangeText={(room) => setRoom(room)} style={styles.textBox} placeholder='Room #'/>
      </View>
      <View style={styles.featuresFlex}>
        <Text style={styles.text}>Products Requested (Optional)</Text>
        <ProductsRequested/>
      </View>
      <View style={styles.featuresFlex}>
        <Text style={styles.text}>Disposal Options Missing (Optional)</Text>
        <Disposal/>
      </View>
      <View style={styles.featuresFlex}>
        <Text style={styles.text}>How satisfied are you with the cleanliness?</Text>
        <SatisfactionRadio data={data} onSelect={(value) => setOption(value)}/>
      </View>
      <TextInput onChangeText={(comment) => setComment(comment)} style={styles.comments} placeholder='Please write any comments (Optional)...'/>
      <View style={styles.confirm}>
      <GenericButton text={"Confirm"} onPress={() => navigation.navigate('Confirm')}/>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  textFlex: {
    flexDirection: 'row',
    alignItems: 'center'
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
  featuresFlex: {
    marginTop: '3%'
  },
  satisfaction: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E8A798',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Helvetica'
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
  confirm: {
    marginTop: '2%',
    marginBottom: '3%'
  }
});
