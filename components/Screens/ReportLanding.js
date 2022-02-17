import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function ReportLanding({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Report Landing with list for previous reports and button to report new</Text>
      <Button title="Report Status" onPress={() => navigation.navigate('Status')}/>
      <Button title="Report a Bathroom" onPress={() => navigation.navigate('Input')}/>

      <StatusBar style="auto" />
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
