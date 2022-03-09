import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {useState} from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GenericButton from '../buttons/GenericButton';
import SwipeUpDown from 'react-native-swipe-up-down';
import SlidingUpPanel from 'rn-sliding-up-panel';
import Modal from "react-native-modalbox";
import { useCallback, useMemo, useRef } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import ReportStatusBar from '../ReportStatusBar';
import ReportsList from '../lists/ReportsList';




export default function ReportLanding({ navigation, reports }) {
  const bottomSheetRef = useRef<BottomSheet>(null);
  console.log(reports);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start', width: '85%', marginBottom: '-10%'}}>
        <Text style={styles.text}>Status of Bathroom Reports</Text>
      </View>
      <View style={styles.list}>
        <ReportsList data={reports}/>
      </View>
      <GenericButton text={'Report Bathroom'} onPress={() => navigation.navigate('Input')}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  container1: {
    width: 300,
    height: 300,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    width: 300,
    height: 300,
    backgroundColor: 'purple',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Helvetica',
    fontSize: 16
  },
  list: {
    marginTop: '-10%',
    marginHorizontal: '10%',
    height: '50%'
  }

});
