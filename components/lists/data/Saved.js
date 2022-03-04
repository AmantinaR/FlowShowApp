import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import Images from '../../../assets/LocationImages';
import Features from '../../../assets/Features';
import Ratings from './DefaultRating';


let SavedData = [
  {
    id: 0,
    miles : '50 ft',
    source : Images.Lathrop,
    name : 'Lathrop Library',
    address : '518 Memorial Way',
    number : '100',
    status : 'Open Now',
    lat: 37.42951123178317,
    lng: -122.16691325127424,
    accessible: Features.accessible,
    gNeutral: Features.gNeutral,
    freePads: Features.freePads,
    tampons: Features.tampons,
    clean: Features.clean,
    diapers: Images.False,
    condoms: Images.False,
    planB: Images.False,
    wipes: Images.False,
    singleOcc: Images.False,
    pads: Features.freePads,
    ratings: Ratings,
    locationRating: 4,
    saved: true,

  },
  {
    id : 1,
    miles : '0.1 mi',
    source : Images.Language,
    name : 'Language Corner',
    address : '450 Jane Stanford Way',
    number : '102',
    status : 'Open Now',
    lat: 37.4263874662526,
    lng: -122.16909536937837,
    accessible: Images.False,
    gNeutral: Features.gNeutral,
    freePads: Features.freePads,
    tampons: Features.tampons,
    clean: Features.clean,
    diapers: Images.False,
    condoms: Images.False,
    planB: Images.False,
    wipes: Images.False,
    pads: Images.False,
    ratings: Ratings,
    locationRating: 4.5,
    saved: true,
  },
];

export default SavedData;
