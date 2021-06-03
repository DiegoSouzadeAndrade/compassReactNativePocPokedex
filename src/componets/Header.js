import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

import ApplicationContext from '../context/ApplicationContext';


const Header = ({ name }) => {
  const {isSearchBarVisible, setisSearchBarVisible} = useContext(ApplicationContext);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
      <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: 40, height: 40 }}>
        {name == 'Pokemons' ?
          <Icon name='search-circle' size={35} color='blue' onPress={() => setisSearchBarVisible(!isSearchBarVisible)} />
          : null
        }
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 22,
    color: '#fff',
    marginTop: 5,
    //fontWeight: '900',
    fontFamily: 'light'
  },
});

export default Header;