import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {useState} from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GenericButton from '../buttons/GenericButton';

export default function RateConfirm({ route, navigation }) {
  const [option, setOption] = useState(null);
  const params = route.params;


  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={params.building.source} style={styles.imagebkd} imageStyle={styles.image} >
        <View style={styles.titleCard}>
          <Text style={styles.nameText}>{params.building.name}</Text>
          <Text style={styles.numberText}>Floor {params.building.number}</Text>
        </View>

      </ImageBackground>
      <StatusBar style="auto" />
      <View style={styles.summary_body}>
        <Text style = {{fontWeight: 'bold', fontSize: 18, marginBottom: '1%', fontFamily: 'Helvetica'}}>Rating Details</Text>
        <View style={styles.summary_line}>
          <Text style = {{fontWeight: 'bold', fontFamily: 'Helvetica'}}>Rating:  </Text>
         </View>
       <View style={styles.summary_line}>
          <Text style = {{fontWeight: 'bold', fontFamily: 'Helvetica'}}>Rating Title:  </Text>
          <Text style = {{fontWeight: 'normal', fontFamily: 'Helvetica'}}>{params.title}  </Text>
       </View>
       <View style={styles.summary_line}>
          <Text style = {{fontWeight: 'bold', fontFamily: 'Helvetica'}}>Description:  </Text>
          <Text style = {{fontWeight: 'normal', fontFamily: 'Helvetica'}}>{params.description}  </Text>
       </View>
       <View style={styles.summary_line}>
          <Text style = {{fontWeight: 'bold', fontFamily: 'Helvetica'}}>Date Submitted:  </Text>
          <Text style = {{fontWeight: 'normal', fontFamily: 'Helvetica'}}>{params.date}  </Text>
       </View>
      </View>
        <GenericButton text={'Done'} onPress={() => navigation.navigate('Bathroom', params.building)}/>
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
