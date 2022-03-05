import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Satisfaction from './Satisfaction';
import Blood from '../bloodStatic/Blood';

export default function BloodRadio({data, onSelect}) {
  const [userOption, setUserOption] = useState(null);
  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };
  return (
    <View style={styles.option}>
      {data.map((item, index) => {
        return (
          <Pressable key={index} onPress={() => selectHandler(item.value)}>
            <Blood color={item.value <= userOption? '#C10C0D' : '#D3D3D3'}/>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  unselected: {
    backgroundColor: 'transparent',
    borderColor: 'grey',
    borderWidth: 3,
    width: 25,
    height: 25,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
