import React, { useEffect, useState } from "react";
import "../../Css/pokemonCard.css";

export default function PokemonCard({ nome, tipo, img }) {
  return (
    <div className="container-cardPokemon">
      <h3>{nome}</h3>
      <img src={img.front_default} />
      <p>{tipo}</p>
    </div>
  );
}
