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
  Image,
  TextInput
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
  const { data, getDetailPokemon, fullPokemonsApiList, fullPokemonsImageApiList, isSearchBarVisible } = useContext(ApplicationContext);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [valueToSearch, setValueToSearch] = useState('');
  const [searched, setSearched] = useState(false);
  const [searchedList, setSearchedList] = useState([]);

  function paginate(pokemonArray, pageSize, pageNumber) {
    return pokemonArray.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  }

  function findPokemon(name) {
    const pokemonFound = fullPokemonsApiList.find((pokemon) => pokemon.name === name);
    console.log({ pokemonFound });
    if(pokemonFound != null){
      searchedList.push(pokemonFound);
      setSearched(true);
    } else {
      Alert.alert(
        'Pokemon não encontrato',
        'Tente novamente',
        [
          {
            text: 'OK',
            onPress: () => {
              setValueToSearch('');
            },
          },
        ],
        {cancelable: false},
      );
    }
  }

  return (
    <View style={{ backgroundColor: COLORS.VERMELHO, flex: 1 }}>
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{ height: 50 }}>
        {isSearchBarVisible ?
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <TextInput
              value={valueToSearch}
              style={{ marginTop: 5, width: Dimensions.get('window').width - 40, backgroundColor: '#fff', height: 35, fontSize: 13 }}
              onChangeText={(value) => {
                setValueToSearch(value);
              }}
              onSubmitEditing={() => {
                findPokemon(valueToSearch);
              }}
            >
            </TextInput>
            <Icon
              name='close'
              size={25}
              color='white'
              style={{marginTop: 10}}
              onPress={() => {
                setSearched(false);
                setValueToSearch('');
              }} />
          </View> : null}
        {searched == false ? paginate(fullPokemonsApiList, pageSize, page).map((pokemon, index) => {
          id = index + 1
          //const pokemonImageUri = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
          return (
            <Card
              key={index}
              style={{ margin: 5, height: 200, flexDirection: 'column', alignItems: 'center' }}
              onPress={() => {
                //console.log(fullPokemonsApiList.length);
                getDetailPokemon(pokemon.name, navigation);
              }}
            >
              <Text style={{ fontSize: 20 }}>{pokemon.name.toUpperCase()}</Text>
              <Image key={index} style={{ width: 150, height: 150 }} source={{ uri: fullPokemonsImageApiList[index] }} ></Image>

            </Card>)
        }) :
          paginate(searchedList, pageSize, page).map((pokemon, index) => {
            id = index + 1
            //const pokemonImageUri = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
            return (
              <Card
                key={index}
                style={{ margin: 5, height: 200, flexDirection: 'column', alignItems: 'center' }}
                onPress={() => {
                  //console.log(fullPokemonsApiList.length);
                  getDetailPokemon(pokemon.name, navigation);
                }}
              >
                <Text style={{ fontSize: 20 }}>{pokemon.name.toUpperCase()}</Text>
                <Image key={index} style={{ width: 150, height: 150 }} source={{ uri: fullPokemonsImageApiList[index] }} ></Image>

              </Card>)
          })
        }
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