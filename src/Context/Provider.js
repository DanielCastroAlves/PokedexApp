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
    /* console.log(endpoints); */
    var response = axios.all(endpoints.map((endpoint)=> axios.get(endpoint))).then((res)=> setListPokemon(res));
    return response;
    /*    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then((response) => {
        setListPokemon(response.data.results);
        console.log(response.data.results);
      })
      .catch((err) => {
        console.error(err);
      }); */
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
