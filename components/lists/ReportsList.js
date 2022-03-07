import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {useState} from 'react'
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Location from '../Location';
import Images from '../../assets/LocationImages';
import DataList from './data/Default';
import FeatureButtonList from './FeatureButtonList';
import ReportComponent from '../ReportComponent';




export default function ReportsList(props) {
  console.log(props.data);

  const renderReport = (report) => {
    return( // date: date, name: name, floor: floor, products: products, comments: comments, step: step}
      <ReportComponent
        date = {report.item.date}
        name = {report.item.name}
        floor = {report.item.floor}
        products = {report.item.products}
        comments = {report.item.comments}
        step= {report.item.step}
        gender = {report.item.gender}
        source={report.item.source}
        disposal={report.item.disposal}
        feedback={report.item.feedback}
      />);
  }

  return (
    <View style={styles.container}>

        <FlatList
            data = {props.data}
            renderItem={(report) => renderReport(report)}
            keyExtractor={(report) => report.comments}
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 17,
    width: 375,
    paddingVertical: '5%',


  },
  list: {
    height: 100,

  }
});
