import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, Pressable, Image } from 'react-native';
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import BloodRating from './bloodStatic/BloodRating';
import ReportStatusBar from './ReportStatusBar';
import { SimpleLineIcons } from '@expo/vector-icons';
import { patchWebProps } from 'react-native-elements/dist/helpers';

export default function Report(props) {
  console.log(props);
  const navigation = useNavigation();
  let productlist = '';
  if (props.products.pads === true) {
    if (productlist === ''){
      productlist = productlist + 'pads'
    } else {
      productlist = productlist + ', pads'
    }
  } if (props.products.tampons === true) {
    if (productlist === ''){
      productlist = productlist + 'tampons'
    } else {
      productlist = productlist + ', tampons'
    }
  } if (props.products.condoms === true) {
    if (productlist === ''){
      productlist = productlist + 'condoms'
    } else {
      productlist = productlist + ', condoms'
    }
  } if (props.products.emcon === true) {
    if (productlist === ''){
      productlist = productlist + 'Emergency Contraception'
    } else {
      productlist = productlist + ', Emergency Contraception'
    }
  } if (props.products.diapers === true) {
    if (productlist === ''){
      productlist = productlist + 'wipes'
    } else {
      productlist = productlist + ', wipes'
    }
  } if (props.products.tp === true) {
    if (productlist === ''){
      productlist = productlist + 'toilet paper'
    } else {
      productlist = productlist + ', toilet paper'
    }
  } if (props.products.soap === true) {
    if (productlist === ''){
      productlist = productlist + 'soap'
    } else {
      productlist = productlist + ', soap'
    }
  }

  let disposallist = '';
  if (props.disposal.inStall === true) {
    if (disposallist === ''){
      disposallist = disposallist + 'In-Stall Trash Can'
    } else {
      disposallist = disposallist + ', In-Stall Trash Can'
    }
  } if (props.disposal.outStall === true) {
    if (disposallist === ''){
      disposallist = disposallist + 'Out-Of-Stall Trash Can'
    } else {
      disposallist = disposallist + ', Out-Of-Stall Trash Can'
    }
  }

  return(
    <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('Details', {name: props.name, floor: props.floor, productlist: productlist, gender: props.gender, step: props.step, date: props.date, comments: props.comments, disposallist: disposallist, feedback: props.feedback, emotion: props.emotion})}>
      <View style={styles.mainFlex}>
        <Image style={styles.picture} source={props.source}/>
        <View style={styles.detailsFlex}>
          {props.feedback !== '' ? <View style= {{flexDirection: 'row'}}>
            <SimpleLineIcons name='speech' size={19} color={'grey'} />
            <Text style = {styles.feedback}>Feedback left by manager</Text>
          </View> : <View></View>}
          <View style= {[styles.topRow, {alignItems: 'left', width:250}]}>
            <Text>
              <Text style = {[styles.text, {fontWeight: 'bold', fontFamily: 'Helvetica'}]}>{props.name}: </Text>
              <Text style = {[styles.text, {fontWeight: 'normal', fontFamily: 'Helvetica'}]}>Floor {props.floor}</Text>
            </Text>
            <Text>
              <Text style = {[styles.text, {fontWeight: 'bold', fontFamily: 'Helvetica'}]}>Request: </Text>
              <Text style = {[styles.text, {fontWeight: 'normal', fontFamily: 'Helvetica'}]}>{productlist}</Text>
            </Text>
          </View>
          <ReportStatusBar step={props.step} small={true}/>
        </View>

      </View>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 315,
    marginVertical: 5,
    borderBottomColor: '#F1F2F3',
    paddingVertical: 5,
    borderBottomWidth: 3,
    marginHorizontal: '13%'
    //borderWidth:1
  },
  distanceTextFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: '8%',
    marginLeft: '-3%',
    width: '45%'
  },
  mainFlex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',
    padding: 10
  },
  picture: {
    borderRadius: 8,
    width: 90,
    height: 90,
    left: -20
  },
  detailsFlex: {
    alignItems: 'flex-start'
  },
  miles: {
    fontWeight: 'bold',
    fontSize: 12,
    fontFamily: 'Helvetica'
  },
  open: {
    fontWeight: 'bold',
    color: '#FF8984',
    fontFamily: 'Helvetica'
  },
  text: {
    fontSize: 12,
    fontFamily: 'Helvetica',
    color: '#1D1F22',
  },
  feedback: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ff8984',
    fontFamily: 'Helvetica',
    marginLeft: '5%'
  },
  topRow: {
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '90%'
  }
});
