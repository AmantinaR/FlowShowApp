import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {useState} from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductsRequested from '../ProductsRequested';
import Disposal from '../Disposal';
import Satisfaction from '../buttons/Satisfaction';
import SatisfactionRadio from '../buttons/SatisfactionRadio';
import GenericButton from '../buttons/GenericButton';

export default function ReportInput({ navigation, route }) {
  const date = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  const fullDate = month + '-' + date + '-' + year;
  const [building, setBuilding] = useState('');
  const [room, setRoom] = useState('');
  const [comment, setComment] = useState('');
  const [option, setOption] = useState(null);
  const productData = [
    {pads:false,
    tampons: false,
    diapers: false,
    condoms: false,
    emcon: false,
    wipes: false,
    tp: false,
    soap: false
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
    }
    setProducts(newProduct);
  };

  const disposalData = [
    {inStall:false,
    outStall: false,}
  ];
  const [disposal, setDisposal] = useState(disposalData);
  const updateDisposal = (selected, option) => {
    let newDisposal = disposal;
    if (option == 'inStall') {
      newDisposal[0].inStall = !selected;
    } else if (option == 'outStall') {
      newDisposal[0].outStall = !selected;
    }
    setDisposal(newDisposal);
  };

  const data = [
    { value: "angry" },
    { value: "sad" },
    { value: "neutral" },
    { value: "smile" },
    { value: "happy" },
  ];


  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Text style={{color: 'rgba(0, 0, 0, 0.5)', fontFamily: 'Helvetica'}}>You tell us the issue(s), and we'll work with the building managers to solve them</Text>
      <View style={styles.textFlex}>
        <Text style={styles.text}>Bathroom Building</Text>
        <TextInput onChangeText={(building) => setBuilding(building)} style={styles.textBox} placeholder='Building Name' />
      </View>
      <View style={styles.textFlex}>
        <Text style={styles.text}>Bathroom Floor #</Text>
        <TextInput onChangeText={(room) => setRoom(room)} style={styles.textBox} placeholder='Floor #'/>
      </View>
      <View style={styles.featuresFlex}>
        <Text style={styles.text}>Products Requested (Optional)</Text>
        <ProductsRequested onPress={(selected, product) => updateProducts(selected, product)}/>
      </View>
      <View style={styles.featuresFlex}>
        <Text style={styles.text}>Disposal Options Missing (Optional)</Text>
        <Disposal onSelect={(selected, disposal) => updateDisposal(selected, disposal)}/>
      </View>
      <View style={{marginTop: '4%'}}>
        <Text style={styles.text}>How satisfied are you with the cleanliness?</Text>
        <SatisfactionRadio data={data} onSelect={(value) => setOption(value)}/>
      </View>
      <TextInput onChangeText={(comment) => setComment(comment)} style={styles.comments} placeholder='Please write any comments (Optional)...'/>
      <View style={styles.confirm}>
      <GenericButton text={"Confirm"} onPress={() => navigation.navigate('Confirm', {building: building, room: room, comment: comment, option: option, products: products, disposal: disposal, date: fullDate})}/>
      </View>
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
    padding: 10
  },
  textFlex: {
    flexDirection: 'row',
    alignItems: 'center'
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
  featuresFlex: {
    marginTop: '3%',
    alignItems: 'center'
  },
  satisfaction: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E8A798',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    fontFamily: 'Helvetica'
  },
  comments: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 4,
    width: 300,
    height: '18%',
    padding: 10,
    marginTop: '5%',
    maxWidth: 360

  },
  confirm: {
    marginTop: '2%',
    marginBottom: '3%'
  }
});
