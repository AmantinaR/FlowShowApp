import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {useState} from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GenderRadio from '../buttons/GenderRadio';

export default function ReportTab({ navigation }) {
  const [option, setOption] = useState(null);
  const data = [
    { value: "Women's" },
    { value: "Gender Neutral" },
    { value: "Men's" },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Text>Amara25's Profile</Text>
      <Text>You can manage your account info here</Text>
      <Image source={require('../../assets/Avatar.png')}/>
      <Text>Username: Amara25</Text>
      <Text>Password: ************</Text>
      <StatusBar style="auto" />
      <View style={{borderBottomColor: 'grey', borderBottomWidth:1, width: 326}}>
      </View>
      <Text>Bathroom Gender Preference</Text>
      <GenderRadio data={data} onSelect={(value) => setOption(value)}/>
      <Text>Accessibility Needs</Text>
      <Image source={require('../../assets/needs.png')}/>
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
});
