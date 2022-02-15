import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import LandingScreen from './components/LandingScreen';
import SearchTab from './components/SearchTab';
import SavedTab from './components/SavedTab';
import AddTab from './components/AddTab';
import ReportTab from './components/ReportTab';
import ProfileTab from './components/ProfileTab';
import MainTab from './components/MainTab';

const LandingStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <LandingStack.Navigator>
        <LandingStack.Screen name="Login" component={LoginScreen}/>
        <LandingStack.Screen name="Register" component={RegisterScreen}/>
        <LandingStack.Screen name="Landing" component={LandingScreen}/>
        <LandingStack.Screen name="Tabs" component={MainTab}/>
      </LandingStack.Navigator>
    </NavigationContainer>
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
