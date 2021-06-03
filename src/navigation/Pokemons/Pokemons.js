import React, {useContext, useRef, useState, useCallback, useEffect} from 'react';
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  InteractionManager,
  Keyboard,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Modal
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  Chip,
  Divider,
  Menu,
  Searchbar,
  Snackbar,
  Title,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import {COLORS} from '../../constants/constants'
import ApplicationContext from '../../context/ApplicationContext';
Icon.loadFont();

const Pokemons = ({ navigation }) =>{

  return (
    <View style={{backgroundColor: COLORS.AZUL, flex: 1}}>
    
    </View>
  )
}

export default Pokemons;