import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState} from 'react';
import Images from '../../assets/LocationImages';

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
import Default from '../lists/data/Default';


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
  const reportStart = [
    {
      date: '2-22-2022',
      name: 'History Corner',
      floor: 1,
      gender: 'Gender Neutral',
      products: {
        pads:true,
        tampons: true,
        diapers: false,
        condoms: false,
        emcon: false,
        wipes: false,
        tp: false,
        soap: true
      },
      disposal: {
        inStall:false,
        outStall: false,},
      comments: 'This bathroom really needs period products!',
      step: 3,
      source: Images.History,
      emotion: "sad",
      feedback: "We have reviewed the request and are in the process of ordering those tampon dispensers. Supply chain shortages mean that the products will take some time to arrive and be installed. We’ll notify FlowShow when this request is completed."
    },
  ];
  const [reports, setReports] = useState(reportStart);
  const changeReports = ({date, name, floor, products, disposal, comments, step, gender, emotion}) => {
    let newReports = [...reports];
    let report = {date: date, name: name, gender: gender, floor: floor, products: products, comments: comments, step: step, source:Images.Generic, disposal: disposal, feedback: '', emotion: emotion}
    newReports.unshift(report);
    setReports(newReports);
    console.log(reports);
  };

  const [bathrooms, setBathrooms] = useState(Default);

  const changeBathrooms = ({changed}) => {
    console.log('changed bathroom');
    console.log(changed);
    setBathrooms(changed);
    console.log(bathrooms);
  };
  const changeSaved = ({index}) => {
    let newBathrooms = [...bathrooms];
    newBathrooms[index].saved = !newBathrooms[index].saved;
    setBathrooms(newBathrooms);
  };

  const changeAddBathroom = ({miles, source, name, address, number, status, list, accessible, gNeutral, freePads, tampons, clean, diapers, condoms, emcon, wipes, locationRating, lat, lng, saved, id}) => {
    console.log('made it to changeAddBathroom');
    console.log('problem on line 90');
    let newBathrooms = [...bathrooms];
    console.log('problem on line 91');
    let newRatings = [...ratings];
    console.log('problem on line 94');
    newRatings.push([]);
    console.log('problem on line 95');
    let newBathroomInput = {miles: '10 ft', source: Images.Generic, name: name, address: address, number: number, status: 'Open Now', list: 'Bathroom', accessible: accessible, gNeutral: gNeutral, freePads: freePads, tampons: tampons, clean: clean, diapers: diapers, condoms: condoms, emcon: emcon, wipes: wipes, locationRating: null, lat: null, lng: null, saved: false, id: bathrooms.length + 1}
    console.log(newBathroomInput);
    console.log('problem on line 99');
    newBathrooms.push(newBathroomInput);
    setBathrooms(newBathrooms);
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
              return <FontAwesome name='plus-square-o' size={size} color={color}/>;
            } else if (route.name == 'Report') {
              return <Octicons name='report' size={size} color={color} />;
            }

          },
          tabBarActiveTintColor: '#C10C0D',
          tabBarInactiveTintColor: 'black'})}>

        <Tab.Screen name="Saved" options={{headerTitle: 'Your Saved Bathrooms', headerRight: () => (
             <View style = {{marginRight: '23%', marginTop: '1.3%'}}>
             <FontAwesome name='bookmark' size={24} color={'#FF8984'}/>
             </View>
              )}}>
              {props => <SavedTab {...props} bathrooms={bathrooms}/>}
        </Tab.Screen>
        <Tab.Screen name="Add"  options={{headerShown: false}}>
          {props => <AddTab {...props} changeAddBathroom={(miles, source, name, address, number, status, list, accessible, gNeutral, freePads, tampons, clean, diapers, condoms, emcon, wipes, ratings, locationRating, lat, lng, saved, id) => changeAddBathroom(miles, source, name, address, number, status, list, accessible, gNeutral, freePads, tampons, clean, diapers, condoms, emcon, wipes, ratings, locationRating, lat, lng, saved, id)}/>}
        </Tab.Screen>
        <Tab.Screen name="Search" options={{headerShown: false}}>
          {props => <SearchTab {...props} user={user} changeBathrooms={(changed) => changeBathrooms(changed)} bathrooms={bathrooms} ratings={ratings} changeSaved = {(bathroom) => changeSaved(bathroom)} changeRatings={(date, number, title, description, order) => changeRatings(date, number, title, description, order)}/>}
        </Tab.Screen>
        <Tab.Screen name="Report" options={{headerShown: false,}}>
          {props => <ReportTab {...props} reports={reports} changeReports={(date, name, floor, products, disposal, comments, step, gender) => changeReports(date, name, floor, products, disposal, comments, step, gender)}/>}
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
