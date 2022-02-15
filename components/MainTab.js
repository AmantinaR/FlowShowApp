import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SearchTab from './SearchTab';
import SavedTab from './SavedTab';
import AddTab from './AddTab';
import ReportTab from './ReportTab';
import ProfileTab from './ProfileTab';

const Tab = createBottomTabNavigator();

export default function MainTab({ navigation }) {
  return (

      <Tab.Navigator>

        <Tab.Screen name="Saved" component={SavedTab}/>
        <Tab.Screen name="Add" component={AddTab}/>
        <Tab.Screen name="Search" component={SearchTab}/>
        <Tab.Screen name="Report" component={ReportTab}/>
        <Tab.Screen name="Profile" component={ProfileTab}/>
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
