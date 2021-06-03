import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import React from 'react';
//import Icon from 'react-native-vector-icons/Feather'

import {COLORS} from '../../constants/constants';
import Pokemons from './Pokemons';
import DetailPokemon from './DetailPokemon';
import Header from '../../componets/Header';

const Stack = createStackNavigator();


const screenOptionStyle = {
  headerStyle: {
    elevation: 0,
    height: 45,
    backgroundColor: COLORS.AZUL,
  },
  gestureEnabled: true,
  gestureDirection: "horizontal",
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerTintColor: 'white',
};

const PokemonStack = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="Pokemons"
        component={Pokemons}
        options={({ navigation, route }) => ({
          headerTitle: () => <Header name="Pokemons" />,
          headerStyle: {
            elevation: 0,
            height: 45,
            backgroundColor: COLORS.VERMELHO,
          },
          headerTintColor: 'blue'
        })}
      />
      <Stack.Screen 
        name="Datail Pokemon"
        component={DetailPokemon}
        options={({ navigation, route }) => ({
          headerTitle: () => <Header name="Detalhamento do Pokemon" />,
          headerStyle: {
            elevation: 0,
            height: 45,
            backgroundColor: COLORS.VERMELHO,
          },
          headerTintColor: 'blue'
        })}
      />
    </Stack.Navigator>
  )
};

export default PokemonStack;