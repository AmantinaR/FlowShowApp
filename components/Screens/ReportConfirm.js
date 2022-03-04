import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {useState} from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GenericButton from '../buttons/GenericButton';

export default function ReportConfirm({ route, navigation }) {
  const [option, setOption] = useState(null);
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
  } if (params.products[0].emcon === true) {
    if (productlist === ''){
      productlist = productlist + 'Emergency Contraception'
    } else {
      productlist = productlist + ', Emergency Contraception'
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
      <Text style = {styles.thank_you}>Thank you for submitting a report! You can check the status of the report under the Report Tab.</Text>
      <Text style = {{margin: '5%'}}>report status bar here :) [have a good day Amantina and Yesenia!]</Text>
      <StatusBar style="auto" />
      <View style={styles.summary_body}>
        <Text style = {{fontWeight: 'bold', fontSize: 18, marginBottom: '1%'}}>Summary of Report</Text>
        <View style={styles.summary_line}>
          <Text style = {{fontWeight: 'bold'}}>Building:  </Text>
          <Text style = {{fontWeight: 'normal'}}>{params.building}  </Text>
         </View>
       <View style={styles.summary_line}>
          <Text style = {{fontWeight: 'bold'}}>Bathroom #:  </Text>
          <Text style = {{fontWeight: 'normal'}}>{params.room}  </Text>
       </View>
       <View style={styles.summary_line}>
          <Text style = {{fontWeight: 'bold'}}>Products Requested:  </Text>
          <Text style = {{fontWeight: 'normal'}}>{productlist}  </Text>
       </View>
       <View style={styles.summary_line}>
          <Text style = {{fontWeight: 'bold'}}>Disposal Options Missing:  </Text>
          <Text style = {{fontWeight: 'normal'}}>{disposallist}  </Text>
       </View>
       <View style={styles.summary_line}>
          <Text style = {{fontWeight: 'bold'}}>Comment:  </Text>
          <Text style = {{fontWeight: 'normal'}}>{params.comment}  </Text>
       </View>
       <View style={styles.summary_line}>
          <Text style = {{fontWeight: 'bold'}}>Date Submitted:  </Text>
          <Text style = {{fontWeight: 'normal'}}>{params.date}  </Text>
       </View>
      </View>
        <GenericButton text={'Done'} onPress={() => navigation.navigate('ReportLanding')}/>
        <TouchableOpacity onPress={() => navigation.navigate('Input')}>
        <Text style = {styles.another_report}>Submit Another Report</Text>
        </TouchableOpacity>
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
  thank_you: {
    color: 'rgba(0, 0, 0, 0.5)',
    marginHorizontal: '5%',
    marginTop: '-20%',
    fontFamily: 'Helvetica'
  },
  summary_body:{
    margin: '10%',
    flexDirection: 'column',
    padding: '3%'
  },
  summary_line: {
    flexDirection: 'row',
    padding: '2%'
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
  bottom_buttons: {
    padding: '3%'
  },
  another_report: {
    fontSize: 16,
    color: '#ff8984',
    textDecorationLine: 'underline',
    margin: '1%'
  },
});
