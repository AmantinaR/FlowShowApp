import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, TouchableOpacity, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GenericButton from '../buttons/GenericButton';

export default function RegisterScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../../assets/logo-large.png")} style={styles.logo}/>
      <Text style = {styles.register_header}>Register</Text>
      <StatusBar style="auto" />
      <TextInput style={styles.textBox} placeholder='username' autoCorrect={false}/>
      <TextInput style={styles.textBox} placeholder='email' autoCorrect={false}/>
      <TextInput style={styles.textBox} placeholder='password' secureTextEntry={true}/>
      <View style = {styles.row}>
        <Text style = {styles.already_member}>  Already a member?  </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
             <Text style = {styles.login}> Login</Text>
         </TouchableOpacity>
         <GenericButton text={'Register'} onPress={() => navigation.navigate('Landing')}/>
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
register_header: {
  fontWeight: 'bold',
  fontSize: 20,
  margin: '5%',
  fontFamily: 'Helvetica'
},
textBox: {
  borderWidth: 1,
  borderRadius: 10,
  borderColor: 'black',
  padding: '3%',
  margin: '3%',
  width: '84%'
},
row: {
  flexDirection: "row",
  width: '84%',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '20%'

},
already_member:{
  fontFamily: 'Helvetica'
},
login: {
  fontSize: 18,
  color: '#ff8984',
  textDecorationLine: 'underline',
  fontFamily: 'Helvetica'
},
text: {
  color: 'white',
  fontFamily: 'Helvetica'
}
});
