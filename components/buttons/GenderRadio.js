import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function GenderRadio({data, onSelect}) {
  const [userOption, setUserOption] = useState(null);
  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };
  return (
    <View>
      {data.map((item) => {
        return (
          <View>
          <Pressable
            style={
              item.value === userOption ? styles.selected : styles.unselected
            }
            onPress={() => selectHandler(item.value)}>
          </Pressable>
          <Text style = {styles.text}>{item.value}</Text>
          </View>
        );
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  selected: {
    backgroundColor: '#fcc181',
    width: 25,
    height: 25,
    flexDirection: 'row',
    borderRadius: 2,
    padding: '2%',
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 2,
    },
   shadowOpacity: 0.25,
   shadowRadius: 2,
  },
  unselected: {
    backgroundColor: 'transparent',
    borderColor: 'grey',
    borderWidth: 3,
    width: 25,
    height: 25,
    flexDirection: 'row',
    borderRadius: 2,
    padding: '2%',
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 2,
    },
   shadowOpacity: 0.25,
   shadowRadius: 2,
  },
  option: {
    flexDirection: 'row',
    borderRadius: 2,
    padding: '2%',
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 2,
    },
   shadowOpacity: 0.25,
   shadowRadius: 2,
  },
  text: {
    fontSize: 15,
    left: '15%',
    top: '-50%'
  }

});
