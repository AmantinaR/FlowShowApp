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

export default function SearchLanding({ navigation, bathrooms, changeBathrooms }) {
  const featureData = [
    {accessible:false,
    pads: false,
    gNeutral: false,
    freePads: false,
    tampons: false,
    clean: false,
    diapers: false,
    condoms: false,
    emcon: false,
    wipes: false,}
  ];
  const [option, setOption] = useState(null);
  const [text, setText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [listHeight, setHeight] = useState('40%');
  const [featureSelected, setFeature] = useState(featureData);


  // variables
  const snapPoints = useMemo(() => ['45%', '97%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
    if (index === 0) {
      let newHeight = '37%';
      setHeight(newHeight);
    } else if (index === 1) {
      let newHeight = '87%';
      setHeight(newHeight);
    }
  }, []);

  const searchName = () => {
    setSearchTerm(text);
    if (text !== '') {
      let newData = bathrooms.filter(location => location.name === text);
      changeBathrooms(newData);
    } else {
      changeBathrooms(bathrooms);
    }
    console.log(text);

  };

  const updateFeatures = (selected, feature) => {

    let newFeature = featureSelected;
    if (feature == 'accessible') {
      newFeature[0].accessible = !selected;
    } else if (feature == 'pads') {
      newFeature[0].pads = !selected;
    } else if (feature == 'freePads') {
      newFeature[0].freePads = !selected;
    } else if (feature == 'tampons') {
      newFeature[0].tampons = !selected;
    } else if (feature == 'singleOcc') {
      newFeature[0].singleOcc = !selected;
    } else if (feature == 'wipes') {
      newFeature[0].wipes = !selected;
    } else if (feature == 'condoms') {
      newFeature[0].condoms = !selected;
    } else if (feature == 'emcon') {
      newFeature[0].emcon = !selected;
    } else if (feature == 'diapers') {
      newFeature[0].diapers = !selected;
    } else if (feature == 'clean') {
      newFeature[0].clean = !selected;
    } else if (feature == 'gNeutral') {
      newFeature[0].gNeutral = !selected;
    }
    setFeature(newFeature);

    function featureFilter(location) {
      if (featureSelected[0].accessible === true && location.accessible === Images.False) {
        return(false);
      }
      if (featureSelected[0].pads === true && location.pads === Images.False) {

        return(false);
      }
      if (featureSelected[0].freePads === true && location.freePads === Images.False) {
        return(false);
      }
      if (featureSelected[0].tampons === true && location.tampons === Images.False) {
        return(false);
      }
      if (featureSelected[0].singleOcc === true && location.singleOcc === Images.False) {
        return(false);
      }
      if (featureSelected[0].wipes === true && location.wipes === Images.False) {
        return(false);
      }
      if (featureSelected[0].condoms === true && location.condoms === Images.False) {
        return(false);
      }
      if (featureSelected[0].emcon === true && location.emcon === Images.False) {
        return(false);
      }
      if (featureSelected[0].diapers === true && location.diapers === Images.False) {
        return(false);
      }
      if (featureSelected[0].clean === true && location.clean === Images.False) {
        return(false);
      }
      if (featureSelected[0].gNeutral === true && location.gNeutral === Images.False) {
        return(false);
      }

      return(true);
    }

    let newFeatureData = Default.filter(featureFilter);
    changeBathrooms({changed: newFeatureData});

  };
  const featurenames = [
    {
      id : 0,
      title:'Pads',
      tag: 'pads'
    },
    {
      id : 1,
      title:'Free Pads',
      tag: 'freePads'
    },
    {
      id : 2,
      title:'Tampons',
      tag: 'tampons'
    },
    {
      id : 3,
      title:'Single occupancy',
      tag: 'singleOcc'
    },
    {
      id : 4,
      title:'Wipes',
      tag: 'wipes'
    },
    {
      id : 5,
      title:'Condoms',
      tag: 'condoms'
    },
    {
      id : 6,
      title:'Emergency Contraception',
      tag: 'emcon'
    },
    {
      id : 7,
      title:'Diapers',
      tag: 'diapers'
    },
    {
      id : 8,
      title:'Accessible',
      tag: 'accessible'
    },
    {
      id : 9,
      title:'Clean',
      tag: 'clean'
    },
    {
      id: 10,
      title: 'Gender Neutral',
      tag: 'gNeutral'
    }
  ];
  return (
    <SafeAreaView style={styles.container}>
      <Search setText={setText} setSearchTerm={setSearchTerm} onPress={searchName}/>
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
  
            {bathrooms.map((item, index) => {

                if (item.lat !== null) {
                  return(<Marker coordinate = {{latitude: item.lat, longitude: item.lng}}
                  title={item.name} key={index}/>);
                } else {
                  return(null);
                }

            })}
          </MapView>
          <BottomSheet
            index={0}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
          >
            <FeatureButtonList data={featurenames} onSelect={(selected, feature) => updateFeatures(selected, feature)}/>
            <Text> Results For {text !== '' ? searchTerm : 'All Nearby'}</Text>
            <ResultList data = {bathrooms} feature={featurenames} height={listHeight}/>

          </BottomSheet>
      </View>



    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  map: {
    left: '-3%',
    width: '106%',
    height: '50%',
    borderRadius: 14,
    marginTop: 20
  },
  container1: {
    width: '95%',
    height: '100%',
    position: 'absolute',
    top: '11%',
    padding: '3%',
  },
  results: {
    backgroundColor: '#fff',
    //height: '40%'
  },
});
