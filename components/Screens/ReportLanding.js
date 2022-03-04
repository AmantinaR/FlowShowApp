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




export default function ReportLanding({ navigation }) {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Report Status" onPress={() => navigation.navigate('Status')}/>
      <GenericButton text={'Report'} onPress={() => navigation.navigate('Input')}/>

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

});
