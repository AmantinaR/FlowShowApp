import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import Images from '../../../assets/LocationImages';
import Features from '../../../assets/Features';
import Ratings from './DefaultRating';


const Default = [
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
    diapers: false,
    condoms: false,
    planB: false,
    wipes: false,
    ratings: Ratings,
    locationRating: 5,
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
    accessible: Features.accessible,
    gNeutral: Features.gNeutral,
    freePads: Features.freePads,
    tampons: Features.tampons,
    clean: Features.clean,
    diapers: false,
    condoms: false,
    planB: false,
    wipes: false,
    ratings: Ratings,
    locationRating: 5,
  },
  {
    id : 2,
    miles : '0.2 mi',
    source : Images.Lathrop,
    name : 'The Axe and Palm',
    address : '520 Lasuen Mall',
    number : '100',
    status : 'Open Now',
    lat: 37.42516775014037,
    lng: -122.17027261481661,
    accessible: Features.accessible,
    gNeutral: Features.gNeutral,
    freePads: Features.freePads,
    tampons: Features.tampons,
    clean: Features.clean,
    diapers: false,
    condoms: false,
    planB: false,
    wipes: false,
    ratings: Ratings,
    locationRating: 5,
  },
  {
    id : 3,
    miles : '50 ft',
    source : Images.Lathrop,
    name : 'Green Library',
    address : '557 Escondido Mall',
    number : '100',
    status : 'Open Now',
    lat: 37.42835301721096,
    lng: -122.1690006487887,
    accessible: Features.accessible,
    gNeutral: Features.gNeutral,
    freePads: Features.freePads,
    tampons: Features.tampons,
    clean: Features.clean,
    diapers: false,
    condoms: false,
    planB: false,
    wipes: false,
    ratings: Ratings,
    locationRating: 5,

  },
  {
    id : 4,
    miles : '50 ft',
    source : Images.Lathrop,
    name : 'History Corner',
    address : '564-570 Lasuen Mall',
    number : '100',
    status : 'Open Now',
    lat: 37.428310368754985,
    lng: -122.16841244270897,
    accessible: Features.accessible,
    gNeutral: Features.gNeutral,
    freePads: Features.freePads,
    tampons: Features.tampons,
    clean: Features.clean,
    diapers: false,
    condoms: false,
    planB: false,
    wipes: false,
    ratings: Ratings,
    locationRating: 5,
  }
];

export default Default;
