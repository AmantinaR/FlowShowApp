import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Landing from './ReportLanding';
import Input from './ReportInput';
import Status from './ReportStatus';
import Confirm from './ReportConfirm';

const ReportStack = createStackNavigator();

export default function ReportTab({ navigation }) {
  return (
    <ReportStack.Navigator>
      <ReportStack.Screen name="Landing" component={Landing} options={{headerShown: false}}/>
      <ReportStack.Screen name="Input" component={Input}/>
      <ReportStack.Screen name="Confirm" component={Confirm}/>
      <ReportStack.Screen name="Status" component={Status}/>
    </ReportStack.Navigator>
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
