import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GenericButton from '../buttons/GenericButton';
import BloodRating from '../bloodStatic/BloodRating';

// name: name, room: room, locationRating: option, gender: gender, date: fullDate, order: order
export default function AddScreenConfirm({ navigation, route  }) {
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
  } if (params.products[0].clean === true) {
    if (productlist === ''){
      productlist = productlist + 'clean'
    } else {
      productlist = productlist + ', clean'
    }
  } if (params.products[0].singleOcc === true) {
    if (productlist === ''){
      productlist = productlist + 'single occupancy'
    } else {
      productlist = productlist + ', single occupancy'
    }
  } if (params.products[0].freepads === true) {
    if (productlist === ''){
      productlist = productlist + 'free pads'
    } else {
      productlist = productlist + ', free pads'
    }
  } if (params.products[0].accessible === true) {
    if (productlist === ''){
      productlist = productlist + 'accessible'
    } else {
      productlist = productlist + ', accessible'
    }
  } if (params.products[0].diapers === true) {
    if (productlist === ''){
      productlist = productlist + 'diapers'
    } else {
      productlist = productlist + ', diapers'
    }
  }
  return (
    <SafeAreaView style={styles.container}>
     <Text style = {styles.thank_you}>Thank you for adding a bathroom to our database!</Text>
    <View style={styles.summary_body}>
      <Text style = {{fontWeight: 'bold', fontSize: 18, marginBottom: '5%', fontFamily: 'Helvetica'}}>Bathroom Details</Text>
      <View style={styles.summary_line}>
         <Text style = {{fontWeight: 'bold', fontFamily: 'Helvetica'}}>Bathroom Name:  </Text>
         <Text style = {{fontWeight: 'normal', fontFamily: 'Helvetica'}}>{params.name}  </Text>
      </View>
      <View style={styles.summary_line}>
         <Text style = {{fontWeight: 'bold', fontFamily: 'Helvetica'}}>Bathroom Floor:  </Text>
         <Text style = {{fontWeight: 'normal', fontFamily: 'Helvetica'}}>{params.room}  </Text>
      </View>
      <View style={styles.summary_line}>
        <Text style = {{fontWeight: 'bold', fontFamily: 'Helvetica'}}>Rating: </Text>
        <BloodRating number={params.locationRating} small={true}/>
       </View>
     <View style={styles.summary_line}>
        <Text style = {{fontWeight: 'bold', fontFamily: 'Helvetica'}}>Gender:  </Text>
        <Text style = {{fontWeight: 'normal', fontFamily: 'Helvetica'}}>{params.gender}  </Text>
     </View>
     <View style={styles.summary_line}>
        <Text style = {{fontWeight: 'bold', fontFamily: 'Helvetica'}}>Products:  </Text>
        <Text style = {{fontWeight: 'normal', fontFamily: 'Helvetica'}}>{productlist}  </Text>
     </View>
     <View style={styles.summary_line}>
        <Text style = {{fontWeight: 'bold', fontFamily: 'Helvetica'}}>Comments:  </Text>
        <Text style = {{fontWeight: 'normal', fontFamily: 'Helvetica'}}>{params.comments}</Text>
     </View>
    </View>
    <GenericButton text={'Add Another Bathroom'} onPress={() => navigation.navigate('Input')}/>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <Text style = {styles.im_good}>No, I'm Good</Text>
        </TouchableOpacity>

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
    padding: 20
  },
  header: {
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'Helvetica'
  },
  thank_you: {
    color: 'rgba(0, 0, 0, 0.5)',
    marginHorizontal: '3%',
    marginTop: '-15%',
    fontFamily: 'Helvetica'
  },
  summary_body:{
    margin: '10%',
    flexDirection: 'column',
    padding: '3%'
  },
  summary_line: {
    flexDirection: 'row',
    padding: '2%',
    alignItems: 'center',
    flexWrap: 'wrap'
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
    padding: '3%',
  },
  im_good: {
    fontSize: 16,
    color: '#ff8984',
    textDecorationLine: 'underline',
    margin: '1%',
    fontFamily: 'Helvetica'
  },
  imagebkd: {
    height: '33%',
    width: '92%',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    borderRadius: 5


  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 5

  },
  titleCard: {
    marginBottom: '3%',
    //marginLeft: '3%',
    backgroundColor: 'rgba(0, 0, 0, 0.50)',
    padding: '3%',
    width: '100%'
  },
  nameText: {

    color: 'white',
    fontFamily: 'Helvetica-Bold',
    fontSize: 24
  },
  numberText: {

    color: 'white',
    fontFamily: 'Helvetica',
    fontSize: 16

  },
});
