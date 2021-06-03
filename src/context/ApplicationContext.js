import React, { useCallback, useEffect, useState } from 'react';

import axios from 'axios';

import {
  API_PATH,
  POKEMON
} from '../constants/constants';

const ApplicationContext = React.createContext();

export const ApplicationProvider = ({ children }) => {
  const [isSearchBarVisible, setisSearchBarVisible] = useState(false);
  const [pokemonsList, setPokemonsList] = useState([]);

  // ======================= Summary API Calls ===========================
  // Used to control api calls on the application

  // ======================= Get Pokemons ===========================
  // Fetch pokemon full list
  const getPokemons = async () =>{
    axios.get(API_PATH + POKEMON)
    .then((response) =>{
      console.log({response});
    }).catch((error)=>{
      console.log(error);
    })
  }

  useEffect(() => {

    const bootstrapAsync = async () => {
      getPokemons();
    };
  
    setTimeout(() => {
      bootstrapAsync();
    }, 3000);
  }, []);

  return (
    <ApplicationContext.Provider
      value={{
        data: pokemonsList,
        isSearchBarVisible,
        setisSearchBarVisible,
        getPokemons
      }}>
      {children}
    </ApplicationContext.Provider>
  );
}

export default ApplicationContext;