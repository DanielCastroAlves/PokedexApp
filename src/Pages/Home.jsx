import React, { useContext } from "react";
import PokemonCard from "../Componets/PokemonCard";
import AppContext from "../Context/AppContext";
import "../Css/home.css";

export default function Home() {
  const {listPokemon, setListPokemon} = useContext(AppContext);
  console.log(listPokemon);

  const pokemonFilter = (name) => {
    var filtroPokemon = [];
    for (var i in listPokemon) {
      if (listPokemon[i].data.name.includes(name)) {
        filtroPokemon.push(listPokemon[i]);
      }
    }
    setListPokemon(filtroPokemon);
  };

  return (
    <div className="container-homePage">
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => pokemonFilter(e.target.value)}
      />
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
  );
}
