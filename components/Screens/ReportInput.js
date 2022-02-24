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

export default function ReportInput({ navigation }) {
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
      <Text>Report Issue(s)</Text>
      <Text>You tell us the issue(s), and we'll work with the building managers to solve them</Text>
      <View style={styles.textFlex}>
        <Text>Bathroom Building</Text>
        <TextInput style={styles.textBox} placeholder='Building Name'/>
      </View>
      <View style={styles.textFlex}>
        <Text>Bathroom Room #</Text>
        <TextInput style={styles.textBox} placeholder='Room #'/>
      </View>
      <View style={styles.featuresFlex}>
        <Text>Products Requested</Text>
        <ProductsRequested/>
      </View>
      <View style={styles.featuresFlex}>
        <Text>Disposal Options Missing</Text>
        <Disposal/>
      </View>
      <View style={styles.featuresFlex}>
        <Text>How satisfied are you with the cleanliness?</Text>
        <SatisfactionRadio data={data} onSelect={(value) => setOption(value)}/>
      </View>
      <Button title="Confirm" onPress={() => navigation.navigate('Confirm')}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textFlex: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textBox: {
    borderWidth: 1,
    borderColor: 'black',
    height: 40,
    padding: 10,
    margin: 12,
    width: 200
  },
  featuresFlex: {

  },
  satisfaction: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E8A798',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
