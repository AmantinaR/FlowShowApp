import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput } from 'react-native';
import { SearchBar } from 'react-native-elements';
import SwipeUpDown from 'react-native-swipe-up-down';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import FeatureButton from '../buttons/FeatureButton';
import FeatureList from '../FeaturesList';
import Search from '../SearchBar';
import Default from '../lists/data/Default.js';
import ResultList from '../lists/ResultsList';
import FeatureButtonList from '../lists/FeatureButtonList';
import { useState } from 'react';
import { useCallback, useMemo, useRef } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';

export default function SearchLanding({ navigation }) {
  const [option, setOption] = useState(null);
  const [text, setText] = useState('');
  const [resultdata, setResultData] = useState(Default);
  const [listHeight, setHeight] = useState('40%');
  const [featureSelected, setFeature] = useState([]);


  // variables
  const snapPoints = useMemo(() => ['50%', '100%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
    if (index === 0) {
      let newHeight = '40%';
      setHeight(newHeight);
    } else if (index === 1) {
      let newHeight = '87%';
      setHeight(newHeight);
    }
  }, []);

  const searchName = () => {
    if (text !== '') {
      let newData = Default.filter(location => location.name === text);
      setResultData(newData);
    } else {
      setResultData(Default);
    }
    console.log(text);

  };

  const featurenames = [
    {
      id : 0,
      title:'Pads'
    },
    {
      id : 1,
      title:'Free Pads'
    },
    {
      id : 2,
      title:'Tampons'
    },
    {
      id : 3,
      title:'Single occupancy'
    },
    {
      id : 4,
      title:'Wipes'
    },
    {
      id : 5,
      title:'Condoms'
    },
    {
      id : 6,
      title:'Plan B'
    },
    {
      id : 7,
      title:'Diapers'
    },
    {
      id : 8,
      title:'Accessible'
    },
    {
      id : 9,
      title:'Clean'
    }
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Search setText={setText} onPress={searchName}/>
      <StatusBar style="auto" />
      <View style={styles.container1}>
        <MapView
          initialRegion={{
            latitude: 37.427238,
            longitude: -122.168587,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }} style={styles.map}
          >
            <Marker coordinate={{latitude: 37.4295238646884, longitude: -122.16790117770296}}
            image={require('../../assets/current-location.png')}/>
            {resultdata.map((item) => {
              return(
                <Marker coordinate = {{latitude: item.lat, longitude: item.lng}}
                title={item.name}/>
              );
            })}
          </MapView>
          <BottomSheet

            index={0}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
          >
          <FeatureButtonList data={featurenames}/>
          <ResultList data = {resultdata} feature={featurenames} height={listHeight}/>

          </BottomSheet>
      </View>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',

  },
  map: {
    width: 365,
    height: 350,
    borderRadius: 14,
    //top: -100.66
  },
  container1: {
    width: 365,
    height: '100%',
    position: 'absolute',
    top: 100,
  },
  results: {
    backgroundColor: 'purple',
    //height: '40%'
  },
});
