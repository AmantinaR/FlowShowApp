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
          <View style={styles.option}>
          <Pressable
            style={
              item.value === userOption ? styles.selected : styles.unselected
            }
            onPress={() => selectHandler(item.value)}>
          </Pressable>
          <Text>{item.value}</Text>
          </View>
        );
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  selected: {
    backgroundColor: 'yellow',
    width: 25,
    height: 25,
  },
  unselected: {
    backgroundColor: 'transparent',
    borderColor: 'grey',
    borderWidth: 3,
    width: 25,
    height: 25,
  },
  option: {
    flexDirection: 'row'
  }
});
