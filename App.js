import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from './components/Screens/LoginScreen';
import RegisterScreen from './components/Screens/RegisterScreen';
import LandingScreen from './components/Screens/LandingScreen';
import SearchTab from './components/Screens/SearchTab';
import SavedTab from './components/Screens/SavedTab';
import AddTab from './components/Screens/AddTab';
import ReportTab from './components/Screens/ReportTab';
import ProfileTab from './components/Screens/ProfileTab';
import MainTab from './components/Screens/MainTab';

const LandingStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <LandingStack.Navigator>
        <LandingStack.Screen name="Login" component={LoginScreen} options={{title: ''}}/>
        <LandingStack.Screen name="Register" component={RegisterScreen} options={{title: ''}}/>
        <LandingStack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}}/>
        <LandingStack.Screen name="Tabs" component={MainTab} options={{headerShown: false}}/>
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
