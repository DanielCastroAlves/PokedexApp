import React, { useState, useEffect } from "react";
import AppContext from "./AppContext";
import axios from "axios";

function Provider({ children }) {
  const [listPokemon, setListPokemon] = useState();
  const getAllPokemon = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then((response) => {
        setListPokemon(response.data.results);
        console.log(response.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getAllPokemon();
  }, [listPokemon]);

  const contextValue = {
    listPokemon,
    setListPokemon,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export default Provider;
