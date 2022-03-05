import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Landing from './ReportLanding';
import Input from './ReportInput';
import Status from './ReportStatus';
import {Ionicons} from '@expo/vector-icons';
import Confirm from './ReportConfirm';

const ReportStack = createStackNavigator();

export default function ReportTab({ navigation }) {
  return (
    <ReportStack.Navigator>
      <ReportStack.Screen name="ReportLanding" component={Landing} options={{headerTitle: 'Report a Bathroom', headerLeft: () =>(<View></View>)}}/>
      <ReportStack.Screen name="Input" component={Input} options={{headerTitle: 'Report Issue(s)',
      headerLeft: () => (<View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Ionicons name={'ios-chevron-back'} size={33} color={'#0F77F0'}/>
        <Button title={'Back'} onPress={() => navigation.navigate("ReportLanding") } style={{marginLeft: 40}}/>
        </View>)}}/>
      <ReportStack.Screen name="Confirm" component={Confirm} options={{headerTitle: 'Report Details',}}/>
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
