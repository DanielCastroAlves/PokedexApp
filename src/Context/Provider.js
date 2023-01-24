import React, { useState, useEffect } from "react";
import AppContext from "./AppContext";
import axios from "axios";

function Provider({ children }) {
  const [listPokemon, setListPokemon] = useState([]);
  useEffect(() => {
    getAllPokemon();
  }, []);

  const getAllPokemon = () => {
    var endpoints = [];
    for (var i = 1; i < 50; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
   
    var response = axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setListPokemon(res));
    return response;
   
  };

  const pokemonFilter = (name) => {
    var filtroPokemon = [];
    for (var i in listPokemon) {
      if (listPokemon[i].data.name.includes(name)) {
        filtroPokemon.push(listPokemon[i]);
      }
    }
    setListPokemon(filtroPokemon);
  };

  const contextValue = {
    listPokemon,
    setListPokemon,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export default Provider;
