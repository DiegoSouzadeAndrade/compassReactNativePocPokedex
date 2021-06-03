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
  const { data, getDetailPokemon, fullPokemonsApiList, fullPokemonsImageApiList } = useContext(ApplicationContext);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  function paginate(pokemonArray, pageSize, pageNumber) {
    return pokemonArray.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  }

  return (
    <View style={{ backgroundColor: COLORS.AZUL, flex: 1 }}>
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{ height: 50 }}>
        {paginate(fullPokemonsApiList, pageSize, page).map((pokemon, index) => {
          id = index + 1
          const pokemonImageUri = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
          return (
            <Card
              key={index}
              style={{ margin: 5, height: 200, flexDirection: 'column', alignItems: 'center' }}
              onPress={() => {
                console.log(fullPokemonsApiList.length);
                getDetailPokemon(pokemon.name, navigation);
              }}
            >
              <Text style={{ fontSize: 20 }}>{pokemon.name.toUpperCase()}</Text>
              <Image key={index} style={{ width: 150, height: 150 }} source={{ uri: fullPokemonsImageApiList[index] }} ></Image>

            </Card>)
        })}
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <Button
            title={'Anterior'}
            onPress={() => {
              setPage(page - 1);
              console.log(page);
            }}
          ></Button>
          <Button
            title={'Proximo'}
            onPress={() => {
              setPage(page + 1);
              console.log(page);
            }}></Button>
        </View>
      </ScrollView>
    </View>
  )
}

export default Pokemons;