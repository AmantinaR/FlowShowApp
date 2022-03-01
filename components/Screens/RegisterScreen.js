import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function RegisterScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../../assets/logo-large.png")} style={styles.logo}/>
      <Text style = {styles.register_header}>Register</Text>
      <StatusBar style="auto" />
      <TextInput style={styles.textBox} placeholder='username' autoCorrect={false}/>
      <TextInput style={styles.textBox} placeholder='email' autoCorrect={false}/>
      <TextInput style={styles.textBox} placeholder='password' secureTextEntry={true}/>
      <TouchableOpacity onPress={() => navigation.navigate('Landing')} style={styles.button}>
      <View>
        <Text style = {styles.text}>Register</Text>
        </View>
      </TouchableOpacity>
      <View style = {styles.row}>
      <Text style = {styles.already_member}>  Already a member?  </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style = {styles.login}> Login</Text>
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
  position: 'absolute',
  top: 90
},
register_header: {
  fontWeight: 'bold',
  fontSize: 20,
  top: 20,
},
textBox: {
  borderWidth: 1,
  borderColor: 'black',
  height: 50,
  padding: 10,
  margin: 12,
  width: 230,
  top: 40
},
row: {
  flexDirection: "row",
  left: -75,

},
already_member:{
  top: 50
},
login: {
  fontSize: 18,
  top: 45,
  color: '#ff8984',
  textDecorationLine: 'underline'
},
button: {
  color: '#ffffff',
  fontSize: 15,
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  backgroundColor: '#fcc181',
  top: 80,
  left: 100,
  marginTop: 10,
  marginBottom: 0,
  height: 48,
  margin: 12,
  width: 97,
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
  color: 'white'
}
});
