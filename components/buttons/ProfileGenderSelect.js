import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function ProfileGenderSelect() {
  function SelectSquare () {
    const [selected, setSelected] = useState(false);
    const SelectUpdate = () => {
      setSelected(!selected);

    };
    return(
        <TouchableOpacity
          style={
            selected ? styles.selected : styles.unselected
          }
          onPress={() => SelectUpdate()}>
          {selected ? <FontAwesome name={'check'} size={18} color={'black'}/> : <View></View>}
        </TouchableOpacity>

    );
  };

  const data = [
    {
      id: 0,
      value: "Women's",
      selected: false,
    },
    {
      id: 1,
      value: "Gender Neutral",
      selected: false,
    },
    {
      id: 2,
      value: "Men's",
      selected: false,
    }
  ];
  const [userOptions, setUserOptions] = useState(data);
  const selectHandler = ({index}) => {
    let newOptions = [...userOptions];
    newOptions[index] = true;
    setUserOptions(newOptions);
  };
  return (
    <View>
      {data.map((item) => {
        return (

          <View key={item.id} style = {styles.option}>
          <SelectSquare/>
          <Text style = {styles.text}>{item.value}</Text>
          </View>


        );
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  selected: {
    borderColor: '#fcc181',
    borderWidth: 3,
    width: 25,
    height: 25,
    flexDirection: 'row',
    borderRadius: 5,

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
    borderRadius: 5,

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
    alignItems: 'center',
    marginVertical: '1%'
  },
  text: {
    marginLeft: '5%',
    fontSize: 13,
    color: 'grey',
    fontFamily: 'Helvetica'
  }

});
