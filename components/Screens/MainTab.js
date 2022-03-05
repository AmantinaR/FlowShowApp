import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState} from 'react';

import SearchTab from './SearchTab';
import SavedTab from './SavedTab';
import AddTab from './AddTab';
import ReportTab from './ReportTab';
import ProfileTab from './ProfileTab';

import SVGImg from '../../assets/saved-icon.svg';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

import Ratings from '../lists/data/DefaultRating';


const Tab = createBottomTabNavigator();

export default function MainTab({ route, navigation }) {
  const user = route.params.user;
  const [ratings, setRatings] = useState(Ratings);

  const changeRatings = (date, number, title, description, order) => {
    let newRatings = [...ratings];
    let rating = {date: date, number: number, title: title, description: description, user: user}
    console.log(rating);
    console.log("title:", title);
    newRatings[order].unshift(rating);
    setRatings(newRatings);
  };

  const [reports, setReports] = useState([]);
  const changeReports = (date, name, floor, products, disposal, comments, status) => {
    let newReports = [...reports];
    let report = {date: date, name: name, floor: floor, products: products, comments: comments, status: status}
    newReports.unshift(report);
    setReports(newReports);
  };
    return (
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Search') {
              return <FontAwesome5 name='search-location' size={size} color={color} />;
            } else if (route.name === 'Saved') {
              return <FontAwesome name='bookmark-o' size={size} color={color} />;
            } else if (route.name === 'Profile') {
              return <MaterialCommunityIcons name='account-circle-outline' size={size} color={color} />;
            } else if (route.name == 'Add') {
              return <Ionicons name='add-circle' size={size} color={color} />;
            } else if (route.name == 'Report') {
              return <Octicons name='report' size={size} color={color} />;
            }

          },
          tabBarActiveTintColor: '#C10C0D',
          tabBarInactiveTintColor: 'black'})}>

        <Tab.Screen name="Saved" component={SavedTab} options={{headerTitle: 'Your Saved Bathrooms'}}/>
        <Tab.Screen name="Add" component={AddTab} options={{headerShown: false}}/>
        <Tab.Screen name="Search" options={{headerShown: false}}>
          {props => <SearchTab {...props} user={user} ratings={ratings} changeRatings={(date, number, title, description, order) => changeRatings(date, number, title, description, order)}/>}
        </Tab.Screen>
        <Tab.Screen name="Report" component={ReportTab} options={{headerShown: false,}}>
        </Tab.Screen>
        <Tab.Screen name="Profile" options={{headerTitle: user+"'s Profile", headerRight: () => (

          <Image style= {{marginRight: '9%', marginTop: '2.5%'}}source={require('../../assets/settings.png')}/>
          )}}>
          {props => <ProfileTab {...props} user={user} ratings={ratings}/>}
          </Tab.Screen>
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
