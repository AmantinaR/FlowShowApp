import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SearchTab from './SearchTab';
import SavedTab from './SavedTab';
import AddTab from './AddTab';
import ReportTab from './ReportTab';
import ProfileTab from './ProfileTab';

import SVGImg from '../../assets/saved-icon.svg';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function MainTab({ navigation }) {
  return (
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Search') {
              iconName = 'safari'
            } else if (route.name === 'Saved') {
              iconName = 'map-pin'
            } else if (route.name === 'Profile') {
              return <Image source={require('../../assets/favicon.png')}/>
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray'})}>

        <Tab.Screen name="Saved" component={SavedTab} options={{headerShown: false}}/>
        <Tab.Screen name="Add" component={AddTab} options={{headerShown: false}}/>
        <Tab.Screen name="Search" component={SearchTab} options={{headerShown: false}}/>
        <Tab.Screen name="Report" component={ReportTab} options={{headerShown: false}}/>
        <Tab.Screen name="Profile" component={ProfileTab} options={{headerShown: false}}/>
      </Tab.Navigator>
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
