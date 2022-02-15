import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



export default function LandingScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Landing Screen</Text>
      <StatusBar style="auto" />
      <Button title="Search for a Bathroom" onPress={() => navigation.navigate('Tabs', { screen: 'Search' })}/>
      <Button title="Report a Bathroom" onPress={() => navigation.navigate('Tabs', { screen: 'Report' })}/>
      <Button title="Saved Bathrooms" onPress={() => navigation.navigate('Tabs', { screen: 'Saved' })}/>
    </View>
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
