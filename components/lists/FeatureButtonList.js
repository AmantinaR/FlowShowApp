import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TextInput, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Location from '../Location';
import Images from '../../assets/LocationImages';
import FeatureButton from '../buttons/FeatureButton';




export default function FeatureButtonList(props) {

  const renderFeature = (feature) => {

    return(
      <FeatureButton title={feature.item.title} onSelect={props.onSelect} tag={feature.item.tag}
      />);
  }

  return (
    <View style={styles.mainContainer}>
      <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data = {props.data}
          renderItem={(feature) => renderFeature(feature)}
          keyExtractor={(feature) => feature.id}
          contentContainerStyle={styles.container}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    top: -10
  },
  mainContainer: {
    height: '10%',
    marginBottom: '-5%'

  }
});
