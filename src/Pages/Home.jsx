import axios from "axios";
import React, { useEffect, useState } from "react";
import PokemonCard from "../Componets/PokemonCard";

import "../Css/home.css";

export default function Home() {
  const [listPokemon, setListPokemon] = useState([]);

  useEffect(() => {
    getAllPokemon();
  }, []);

  const getAllPokemon = () => {
    var endpoints = [];
    for (var i = 1; i < 150; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }

    var response = axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setListPokemon(res));
    return response;
  };
  const pokemonFilter = (name) => {
    var filtroPokemon = [];
    if (name === "") {
      getAllPokemon();
    }
    for (var i in listPokemon) {
      if (listPokemon[i].data.name.includes(name)) {
        filtroPokemon.push(listPokemon[i]);
      }
    }
    setListPokemon(filtroPokemon);
  };

  return (
    <div className="homePage">
      <div className="pokedex">
        <div className="input-pesquisa">
          <label>Procurar Pokemon:</label>
          <input
            type="text"
            name=""
            id=""
            onChange={(e) => pokemonFilter(e.target.value)}
          />
        </div>
        <div className="tela-principal">
          {listPokemon &&
            listPokemon.map((dados) => (
              <PokemonCard
                key={dados.data.name}
                nome={dados.data.name}
                tipo={dados.data.types[0].type.name}
                img={dados.data.sprites}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
