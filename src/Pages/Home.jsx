import React, { useContext } from "react";
import PokemonCard from "../Componets/PokemonCard";
import AppContext from "../Context/AppContext";
import "../Css/home.css";

export default function Home() {
  const { listPokemon } = useContext(AppContext);
  console.log(listPokemon);
  return (
    <div className="container-homePage">
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
