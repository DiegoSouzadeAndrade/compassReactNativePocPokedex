import React, { useContext, useLayoutEffect, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  InteractionManager,
  StatusBar,
  Button,
  Image
} from 'react-native';

import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { Card, Title } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';

import ApplicationContext from '../../context/ApplicationContext';
import {
  COLORS,
  API_PATH,
  POKEMON
} from '../../constants/constants';
import Header from '../../componets/Header';

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const renderItem = ({ item }) => <Item title={item.title} />;

const DetailPokemon = ({ navigation, route }) => {
  //const { pokemon, id } = route.params;
  const { detailedPokemon, fullPokemonsImageApiList } = useContext(ApplicationContext);

  function findPokemonImage(name) {
    const imagefound = fullPokemonsImageApiList.find((pokemonImage) => pokemonImage.pokemonName === name);
    console.log({ imagefound });
    if (imagefound != null) {
      return <Image style={{ width: 170, height: 170, backgroundColor: '#74a1fc', borderRadius: 5}} source={{ uri: imagefound.uri }} ></Image>
    }

  }

  useLayoutEffect(() => {
    // navigation.setOptions({
    //   headerTitle: () =>{
    //     <Header name={detailedPokemon.name}/>
    //   }
    // });
    //console.log('pokemon selected ', detailedPokemon);
  });

  return (
    <View style={{ backgroundColor: COLORS.VERMELHO, flex: 1 }}>
      <ScrollView
        styles={styles.container}
        horizontal={false}
        alwaysBounceHorizontal={true}
        decelerationRate={0.9}
        snapToInterval={Dimensions.get('window').width} //your element width
        snapToAlignment={'center'}
      >
        <Card
          style={{
            borderRadius: 20,
            flex: 1,
            elevation: 5,
            alignItems: 'center',
            justifyContent: 'center',
            width: Dimensions.get('window').width - 20,
            //borderColor: '#f5f5f5',
            //borderWidth: 1,
            backgroundColor: '#fff',
            margin: 10,
          }}
        >
          <View style={{flexDirection: 'column', alignItems: 'center'}}>

            <Text style={{ fontSize: 20 }}>{detailedPokemon.name.toUpperCase()}</Text>
            {findPokemonImage(detailedPokemon.name)}
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'column', margin: 5 }}>
              <Text style={{ fontSize: 15 }}>Caracteristicas:</Text>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'column', margin: 5 }}>
                  <Text style={{ fontSize: 13, marginBottom: 5 }}>Tipo:</Text>
                  <Text style={{ fontSize: 10 }}>Peso: {detailedPokemon.weight}</Text>
                  <Text style={{ fontSize: 10 }}>Altura: {detailedPokemon.height}</Text>
                  <Text style={{ fontSize: 10 }}>XP base: {detailedPokemon.base_experience}</Text>
                  {detailedPokemon.forms.map((forms, index) => {
                    return (
                      <View key={index} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 10 }}>Forma {index + 1}: {forms.name}</Text>
                      </View>
                    )
                  })}
                  {detailedPokemon.past_types.length != 0 ? detailedPokemon.past_types.map((past_types, index) => {
                    return (
                      <View key={index} style={{ flexDirection: 'column' }}>
                        <Text style={{ fontSize: 10 }}>Tipos passados {index + 1}:</Text>
                        <Text style={{ fontSize: 10 }}>Geração: {past_types.generation.name}</Text>
                        <Text style={{ fontSize: 10 }}>Tipo: {past_types.types[index].type.name}</Text>
                      </View>
                    )
                  }) : <Text style={{ fontSize: 10 }}>Não possui tipos passados</Text>}

                </View>
                <View style={{ flexDirection: 'column', margin: 5 }}>
                  <Text style={{ fontSize: 13, marginBottom: 5 }}>Tipo:</Text>
                  {detailedPokemon.types.map((types, index) => {
                    return (
                      <View key={index} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 10 }}>{types.type.name}</Text>
                      </View>
                    )
                  })}
                </View>
                <View style={{ flexDirection: 'column', margin: 5 }}>
                  <Text style={{ fontSize: 13, marginBottom: 5 }}>Stats:</Text>
                  {detailedPokemon.stats.map((stats, index) => {
                    return (
                      <View key={index} style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 10 }}>{stats.stat.name}</Text>
                        <Text style={{ fontSize: 10, marginLeft: 5 }}>{stats.base_stat}</Text>
                      </View>
                    )
                  })}
                </View>
              </View>
            </View>


          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'column', margin: 5 }}>
              <Text style={{ fontSize: 15 }}>Habilidades:</Text>
              {detailedPokemon.abilities.map((abilities, index) => {
                return <Text key={index} style={{ fontSize: 10 }}>{abilities.ability.name}</Text>
              })}
            </View>
            <View style={{ flexDirection: 'column', margin: 5 }}>
              <Text style={{ fontSize: 15 }}>Ataques:</Text>
              {detailedPokemon.moves.slice(0, 7).map((moves, index) => {
                return <Text key={index} style={{ fontSize: 10 }}>{moves.move.name}</Text>
              })}
            </View>
            <View style={{ flexDirection: 'column', margin: 5 }}>
              <Text style={{ fontSize: 15 }}>Itens:</Text>
              {detailedPokemon.held_items.length != 0 ? detailedPokemon.held_items.map((items, index) => {
                return (
                  <View key={index} style={{ flexDirection: 'column' }}>
                    <Text style={{ fontSize: 10 }}>Item {index + 1}:</Text>
                    <Text style={{ fontSize: 10 }}>{items.item.name}</Text>
                    <Text style={{ fontSize: 10 }}>Raridade: {items.version_details[0].rarity}</Text>
                  </View>
                )
              }) : <Text style={{ fontSize: 10 }}>Não possui itens</Text>}
            </View>
          </View>
        </Card>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#222',
  },
  modalContainerStyle: {
    margin: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  item: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DetailPokemon;