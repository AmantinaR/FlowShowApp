import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { shadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export default function LoginScreen({ navigation }) {

  const [text, setText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
       <Image source={require("../../assets/logo-large.png")} style={styles.logo}/>
      <Text style = {styles.login_header}>Login</Text>
      <StatusBar style="auto" />
      <TextInput style={styles.textBox} placeholder='username' autoCorrect={false} onChangeText={(text) => setText(text)}/>
      <TextInput style={styles.textBox} placeholder='password' secureTextEntry={true}/>
      <View style = {styles.row}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style = {{fontFamily: 'Helvetica'}}>  New here?  </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text style = {styles.register}> Register</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Landing', {user: text})} style={styles.button}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>
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
  },
  logo: {
    padding: '5%'
  },
  login_header: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: '5%',
    fontFamily: 'Helvetica'
  },
  textBox: {
    borderWidth: 1,
    borderColor: 'black',
    padding: '3%',
    margin: '3%',
    width: '84%',
    borderRadius: 10
  },
  row: {
    flexDirection: "row",
    width: '84%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '20%'
  },
  bottom_bar:{
  },
  register: {
    fontSize: 18,
    color: '#ff8984',
    textDecorationLine: 'underline',
    fontFamily: 'Helvetica'
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
