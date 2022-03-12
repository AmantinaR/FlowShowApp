import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {useState} from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductsRequested from '../ProductsRequested';
import Disposal from '../Disposal';
import Satisfaction from '../buttons/Satisfaction';
import SatisfactionRadio from '../buttons/SatisfactionRadio';
import GenericButton from '../buttons/GenericButton';
import GenderRadio from '../buttons/GenderRadio';

export default function ReportInput({ navigation, route, changeReports }) {
  const date = new Date().getDate();
  const month = new Date().getMonth() + 1;
  const year = new Date().getFullYear();
  const fullDate = month + '-' + date + '-' + year;
  const [building, setBuilding] = useState('');
  const [room, setRoom] = useState('');
  const [comment, setComment] = useState('');
  const [option, setOption] = useState(null);
  const [gender, setGender] = useState(null);
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

  const dataGender = [
    { value: "Women's" },
    { value: "Gender Neutral" },
    { value: "Men's" },
  ];

  const pressConfirm = () => {
    navigation.navigate('Confirm', {building: building, room: room, comment: comment, option: option, products: products, disposal: disposal, date: fullDate, step: 1});
    changeReports({date: fullDate, name: building, floor: room, products: products[0], disposal: disposal[0], comments: comment, step: 1, gender: gender, emotion: option});
  };


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{height: 1200, marginTop: '2%'}} scrollToOverflowEnabled={true} showsVerticalScrollIndicator={true} maximumZoomScale={0}>
        <View style={{flex: 1, alignItems: 'center', padding: 16}}>
        <Text style={{color: 'rgba(0, 0, 0, 0.5)', fontFamily: 'Helvetica'}}>You tell us the issue(s), and we'll work with the building managers to solve them</Text>
        <View style={styles.textFlex}>
          <Text style={styles.text}>Bathroom Building</Text>
          <TextInput onChangeText={(building) => setBuilding(building)} style={styles.textBox} placeholder='Building Name' />
        </View>
        <View style={styles.textFlex}>
          <Text style={styles.text}>Bathroom Floor #  </Text>
          <TextInput onChangeText={(room) => setRoom(room)} style={styles.textBox} placeholder='Floor #'/>
        </View>
        <View style={{flexDirection: 'column', padding: 10, alignItems: 'center'}}>
          <Text style = {[styles.text, {margin: 10}]}>What gender is assigned to this bathroom?</Text>
          <GenderRadio data={dataGender} onSelect={(value) => setGender(value)}/>
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
        <View style={{flexDirection: 'row', justifyContent: 'flex-start', width: '100%', marginTop: '10%'}}>
        <Text style={styles.text}>Additional Comments (Optional)</Text>
        </View>
        <TextInput multiline maxLength={500} onChangeText={(comment) => setComment(comment)} style={styles.comments} placeholder='Please write any comments (Optional)...'/>
        <View style={styles.confirm}>
        <GenericButton text={"Confirm"} onPress={() => pressConfirm()}/>
        </View>
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
  },
  scroll: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    height: 1200,
    marginTop: 10
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
    fontFamily: 'Helvetica',
    fontSize: 16
  },
  comments: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 4,
    width: '100%',
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
