import React, { useCallback, useEffect, useState } from 'react';

import axios from 'axios';

import {
  API_PATH,
  IMAGE_API_PATH,
  POKEMON,
  OFFSET,
  LIMIT
} from '../constants/constants';

const ApplicationContext = React.createContext();

export const ApplicationProvider = ({ children }) => {
  const [isSearchBarVisible, setisSearchBarVisible] = useState(false);
  const [pokemonsList, setPokemonsList] = useState([]);
  const [fullPokemonsApiList, setFullPokemonsApiList] = useState([]);
  const [fullPokemonsImageApiList, setFullPokemonsImageApiList] = useState([]);
  const [detailedPokemon, setDetailedPokemon] = useState([]);

  // ======================= Summary API Calls ===========================
  // Used to control api calls on the application

  // ======================= Get Pokemons ===========================
  // Fetch pokemon full list
  // data {"count": 1118, "next": "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20", "previous": null}

  const getPokemons = async () =>{
    let pokemonCount;
    let imageCount= 0;
    let numPages;
    let nextApiPath;
    let fullApiPokemons = [];
    let ApiImagePathTemp;
    let fullApiPokemonsImage = [];
    
    await axios.get(API_PATH + POKEMON)
    .then((response) =>{
      pokemonCount = response.data.count;
      numPages = pokemonCount / 20;
      nextApiPath = response.data.next;
      fullApiPokemons = response.data.results;
      for (let index = 1; index <= response.data.results.length; index++){
        imageCount++;
        ApiImagePathTemp = `${IMAGE_API_PATH}${POKEMON}${imageCount}.png`;
        fullApiPokemonsImage.push(ApiImagePathTemp);
      }
      setFullPokemonsImageApiList(fullApiPokemonsImage);
      //console.log('Pokemons ', response.data);
      //setPokemonsList(response.data.results);
    }).then(async() =>{
      for (let index = 1; index <= numPages; index++) {
        try {
           await axios.get(nextApiPath)
          .then((response)=>{
            // console.log(response.data);
            // console.log(response.data.next);
            nextApiPath = response.data.next;
            //console.log({nextApiPath});
            response.data.results.forEach(element => {
              imageCount++;
              fullApiPokemons.push(element);
              ApiImagePathTemp = `${IMAGE_API_PATH}${POKEMON}${imageCount}.png`;
              fullApiPokemonsImage.push(ApiImagePathTemp);
            });
            console.log(fullApiPokemons.length);
          }).catch((error)=>{
            console.log(error);
          })
        } catch (error) {
          console.log(error);
        }
      }
      setFullPokemonsImageApiList(fullApiPokemonsImage);
      setFullPokemonsApiList(fullApiPokemons);
    })
    .catch((error)=>{
      console.log(error);
    });
  }

  const getDetailPokemon = async (nome, navigation) =>{
    await axios.get(API_PATH + POKEMON + nome)
    .then((response)=>{
      console.log('detailed data ', response.data)
      setDetailedPokemon(response.data);
    }).then(()=>{
      navigation.navigate('Datail Pokemon');
    })
    .catch((error)=>{
      console.log({error});
    });
  }

  const cleanPokemonList = () =>{
    setFullPokemonsApiList([]);
    setFullPokemonsImageApiList([]);
  }

  useEffect(() => {

    const bootstrapAsync = async () => {
      if(fullPokemonsApiList.length == 0){
        getPokemons();
      }
      //cleanPokemonList();
    };
  
    setTimeout(() => {
      bootstrapAsync();
    }, 3000);
  }, []);

  return (
    <ApplicationContext.Provider
      value={{
        data: pokemonsList,
        fullPokemonsApiList,
        fullPokemonsImageApiList,
        isSearchBarVisible,
        setisSearchBarVisible,
        getPokemons,
        getDetailPokemon,
        detailedPokemon
      }}>
      {children}
    </ApplicationContext.Provider>
  );
}

export default ApplicationContext;