import React, { useContext, useRef, useState, useCallback, useEffect } from 'react';
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
  Button,
  ScrollView,
  Modal,
  Image
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  Chip,
  Divider,
  Menu,
  Searchbar,
  Snackbar,
  Title,
  Card
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../constants/constants'
import ApplicationContext from '../../context/ApplicationContext';
Icon.loadFont();

const Pokemons = ({ navigation }) => {
  const { data } = useContext(ApplicationContext);

  return (
    <View style={{ backgroundColor: COLORS.AZUL, flex: 1 }}>
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{ height: 50 }}>
        {data.map((pokemon, index) => {
          const pokemonImageUri = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
          return <Card key={index} style={{margin:5, height: 200, flexDirection: 'column', alignItems: 'center'}}>
            <Text style={{fontSize: 20}}>{pokemon.name.toUpperCase()}</Text>
            <Image style={{width:150, height:150}} source={{uri: pokemonImageUri}} ></Image>
          </Card>
        })}
      </ScrollView>
    </View>
  )
}

export default Pokemons;