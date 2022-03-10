import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {useState} from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GenderRadio from '../buttons/GenderRadio';
import FeaturesList from '../FeaturesList';
import GenericButton from '../buttons/GenericButton';
import BloodRadio from '../buttons/BloodRadio';
import Features from '../../assets/Features';
import Images from '../../assets/LocationImages';

export default function AddScreenInput({ navigation, changeAddBathroom }) {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [address, setAddress] = useState('');
  const [comment, setComment] = useState('');
  const [option, setOption] = useState(null);
  const [gender, setGender] = useState(null);
  const [title, setTitle] = useState('');

  const date = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  const fullDate = month + '-' + date + '-' + year;

  const dataRate = [
    { value: 1 },
    { value: 2 },
    { value: 3 },
    { value: 4 },
    { value: 5 },
  ];
  const data = [
    { value: "Women's" },
    { value: "Gender Neutral" },
    { value: "Men's" },
  ];

  const productData = [
    {pads:false,
    freePads: false,
    singleOcc: false,
    clean: false,
    tampons: false,
    diapers: false,
    condoms: false,
    emcon: false,
    wipes: false,
    tp: false,
    soap: false,
    accessible: false,
    diapers: false,
  }
  ];
  const [products, setProducts] = useState(productData);
  const updateProducts = (selected, product) => {
    let newProduct = products;
    if (product == 'pads') {
      newProduct[0].pads = !selected;
    } else if (product == 'pads') {
      newProduct[0].pads = !selected;
    } else if (product == 'tampons') {
      newProduct[0].tampons = !selected;
    } else if (product == 'wipes') {
      newProduct[0].wipes = !selected;
    } else if (product == 'condoms') {
      newProduct[0].condoms = !selected;
    } else if (product == 'emcon') {
      newProduct[0].emcon = !selected;
    } else if (product == 'diapers') {
      newProduct[0].diapers = !selected;
    } else if (product == 'tp') {
      newProduct[0].tp = !selected;
    } else if (product == 'soap') {
      newProduct[0].soap = !selected;
    } else if (product == 'freePads') {
      newProduct[0].freePads = !selected;
    } else if (product == 'singleOcc') {
      newProduct[0].singleOcc = !selected;
    } else if (product == 'clean') {
      newProduct[0].clean = !selected;
    } else if (product == 'accessible') {
      newProduct[0].accessible = !selected;
    }
    setProducts(newProduct);
  };

  const confirmPress = () => {
    console.log('checking confirm press features')
    console.log(products[0]);
    console.log(products[0].accessible);
    changeAddBathroom({date: fullDate, miles: 0, source: 0, name: name, address: address, number: `${room}, ${gender}`, status: 0, list: 0, accessible: products[0].accessible ? Features.accessible : Images.False, gNeutral: products[0].gNeutral ? Features.gNeutral : Images.False, freePads: products[0].freePads ? Features.freePads : Images.False, tampons: products[0].tampons ? Features.tampons : Images.False, clean: products[0].clean ? Features.clean : Images.False, diapers: products[0].diapers ? Features.diapers : Images.False, condoms: products[0].condoms ? Features.condoms : Images.False, emcon: products[0].emcon ? Features.emcon : Images.False, wipes: products[0].wipes ? Features.wiped : Images.False, locationRating: option, lat: 0, lng: 0, saved: false, id: 0, title: title, comments: comment});
    navigation.navigate('Confirm', {name: name, room: room, locationRating: option, gender: gender, products: products, comments: comment});
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{height: 1300, marginTop: '2%'}} scrollToOverflowEnabled={true} showsVerticalScrollIndicator={true} maximumZoomScale={0}>
        <View style={{flex: 1, alignItems: 'center', padding: 16}}>
          <View style={{alignItems: 'center', paddingHorizontal: 0}}><Text style = {styles.disclaimer}>By the way, we cross check your entry across our database to make sure there are no double entries</Text>
          </View>

        <View style={styles.textFlex}>
          <View style={{alignItems: 'center'}}><Text style={styles.text}>What building is this </Text><Text style={styles.text}>bathroom in?</Text></View>
          <TextInput onChangeText={(text) => setName(text)} style={styles.textBox} placeholder='Building Name' />
        </View>
        <View style={styles.textFlex}>
          <Text style={[styles.text, {top: '1%'}]}>Bathroom Floor #</Text>
          <TextInput onChangeText={(text) => setRoom(text)} style={styles.textBox} placeholder='Floor #'/>
        </View>
        <View style={styles.textFlex}>
          <Text style={[styles.text, {top: '1%'}]}>Building Address</Text>
          <TextInput onChangeText={(text) => setAddress(text)} style={styles.textBox} placeholder='i.e 123 Alphabet Way'/>
        </View>
        <View style={{flexDirection: 'column', padding: 10, alignItems: 'center'}}>
          <Text style = {[styles.txt, {margin: 10}]}>What gender is assigned to this bathroom?</Text>
          <GenderRadio data={data} onSelect={(value) => setGender(value)}/>
        </View>
          <Text style = {[styles.txt, {margin: 15}]}>What features does this bathroom have?</Text>
          <FeaturesList onSelect={(selected, product) => updateProducts(selected, product)}/>
          <View style={{width: 300, borderBottomWidth: 1, borderBottomColor: 'rgba(0, 0, 0, 0.25)', marginBottom: 10}}></View>
          <Text style={{fontFamily: 'Helvetica', fontWeight: 'bold'}}>Rate this Bathroom (optional)</Text>
          <View style={{flexDirection: 'row', padding: 15, alignItems: 'center'}}>
            <Text style = {styles.text}>Rate Bathroom: </Text>
            <BloodRadio data={dataRate} onSelect={(value) => setOption(value)}/>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'center'}}>
            <Text style={styles.text, {top: '1%', }}>Rating Title(required): </Text>
            <TextInput style={styles.textBox} placeholder='' onChangeText={(text) => setTitle(text)}/>
          </View>
          <Text style = {[styles.text, {margin: 15}]}>Additional Comments</Text>
          <TextInput onChangeText={(text) => setComment(text)} multiline style={styles.comments} placeholder={'Please write any comments here (Optional)'}/>
          <GenericButton text={'Confirm'} onPress={() => confirmPress()}/>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //paddingTop: StatusBar.currentHeight
  },
  header: {
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'Helvetica'
  },
  disclaimer: {
    color: 'rgba(0, 0, 0, 0.5)',
    marginTop: '3%',
    marginHorizontal: '2%',
    fontFamily: 'Helvetica'
  },
  ScrollView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //marginTop: '15%'
  },
  textFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Helvetica'
  },
  textBox: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    height: 40,
    padding: 10,
    margin: 12,
    width: '40%',
    borderRadius: 4
  },
  photoSection: {
    flexDirection: 'row',
    padding: 1

  },
  photoHolder: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'black',
    alignItems: 'center',
    padding: '5%',
    marginTop: '3%',
    width: 150,
    height: 110
  },
  comments: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 4,
    width: '100%',
    height: '12%',
    padding: 10,
    marginTop: '0%',
    maxWidth: 360

  },
});
