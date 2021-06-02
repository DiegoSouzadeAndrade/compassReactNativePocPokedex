import React, { useCallback, useEffect, useState } from 'react';

import axios from 'axios';

import {
  API_PATH,
  POKEMON
} from '../constants/constants';

const ApplicationContext = React.createContext();

export const ApplicationProvider = ({ children }) => {
  const [pokemonsList, setPokemonsList] = useState([]);

  // ======================= Summary API Calls ===========================
  // Used to control api calls on the application

  // ======================= Get Pokemons ===========================
  // Fetch pokemon full list
  const getPokemons = () =>{

  }
}

useEffect(() => {

  const bootstrapAsync = async () => {

  };

  setTimeout(() => {
    bootstrapAsync();
  }, 3000);
}, []);

return (
  <ApplicationContext.Provider
    value={{data: pokemonsList}}>
    {children}
  </ApplicationContext.Provider>
);

export default ApplicationContext;