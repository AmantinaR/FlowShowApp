import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function ReportConfirm({ route, navigation }) {
  const params = route.params;
  let productlist = '';
  if (params.products[0].pads === true) {
    if (productlist === ''){
      productlist = productlist + 'pads'
    } else {
      productlist = productlist + ', pads'
    }
  } if (params.products[0].tampons === true) {
    if (productlist === ''){
      productlist = productlist + 'tampons'
    } else {
      productlist = productlist + ', tampons'
    }
  } if (params.products[0].condoms === true) {
    if (productlist === ''){
      productlist = productlist + 'condoms'
    } else {
      productlist = productlist + ', condoms'
    }
  } if (params.products[0].planb === true) {
    if (productlist === ''){
      productlist = productlist + 'Plan B'
    } else {
      productlist = productlist + ', Plan B'
    }
  } if (params.products[0].diapers === true) {
    if (productlist === ''){
      productlist = productlist + 'wipes'
    } else {
      productlist = productlist + ', wipes'
    }
  } if (params.products[0].tp === true) {
    if (productlist === ''){
      productlist = productlist + 'toilet paper'
    } else {
      productlist = productlist + ', toilet paper'
    }
  } if (params.products[0].soap === true) {
    if (productlist === ''){
      productlist = productlist + 'soap'
    } else {
      productlist = productlist + ', soap'
    }
  }

  let disposallist = '';
  if (params.disposal[0].inStall === true) {
    if (disposallist === ''){
      disposallist = disposallist + 'In-Stall Trash Can'
    } else {
      disposallist = disposallist + ', In-Stall Trash Can'
    }
  } if (params.disposal[0].outStall === true) {
    if (disposallist === ''){
      disposallist = disposallist + 'Out-Of-Stall Trash Can'
    } else {
      disposallist = disposallist + ', Out-Of-Stall Trash Can'
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{padding: 25}}>
      <Text>Thank you for submitting a report! You can check the status of the report under the Report Tab.</Text>
      <Text>report status bar here</Text>
      <Text>Summary of Report</Text>
      <Text>Building: {params.building}</Text>
      <Text>Bathroom #: {params.room}</Text>
      <Text>Products Requested: {productlist} </Text>
      <Text>Disposal Options Missing: {disposallist} </Text>
      <Text>Date Submitted: {params.date} </Text>
      <TouchableOpacity></TouchableOpacity>
      <Button title="Done" onPress={() => navigation.navigate('ReportLanding')}/>
      <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  button: {
    color: '#ffffff',
    fontSize: 15,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#fcc181',
    height: '37%',
    width: '30%',
    borderRadius: 4,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 2,
    },
   shadowOpacity: 0.25,
   shadowRadius: 2,
 },
  text: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Helvetica-Bold'

  },
});
