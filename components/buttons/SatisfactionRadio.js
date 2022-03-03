import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Satisfaction from './Satisfaction';

export default function SatisfactionRadio({data, onSelect}) {
  const [userOption, setUserOption] = useState(null);
  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };
  return (
    <View style={styles.option}>
      {data.map((item, index) => {
        return (
          <Satisfaction key={index} emotion={item.value} onPress={() => selectHandler(item.value)} selected={item.value === userOption ? true : false}/>
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
