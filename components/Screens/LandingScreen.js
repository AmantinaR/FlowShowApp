import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, Image, Pressable, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Svg, { Circle } from 'react-native-svg';
import SVGImg from '../../assets/saved-icon.svg';


export default function LandingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../assets/landing-blob.png')} style={styles.blob}/>
      <Image source={require("../../assets/logo-large.png")} style={styles.logo}/>
      <StatusBar style="auto" />
      <View style={styles.buttonsBox}>
        <TouchableOpacity onPress={() => navigation.navigate('Tabs', { screen: 'Search' })}>
          <Image source={require('../../assets/find-bathroom.png')} style={styles.button}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Tabs', { screen: 'Report' })}>
          <Image source={require('../../assets/report-bathroom.png')} style={styles.button}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Tabs', { screen: 'Saved' })}>
          <Image source={require('../../assets/saved-bathrooms.png')} style={styles.button}/>
        </TouchableOpacity>
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
  },
  logo: {
    position: 'absolute',
    width: '26%',
    height: '19%',
    top: '30%',
  },
  blob: {
    position: 'absolute',
    width: '100%',
    height: '70%',
    top: '40%',
  },
  buttonsBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    position: 'absolute',
    width: '70%',
    height: '30%',
    top: '50%',
  },
  button: {
    marginTop: '10%',
    marginBottom: '0%',
  }
});
