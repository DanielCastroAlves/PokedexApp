import React, { useEffect, useState } from "react";
import "../../Css/pokemonCard.css";

export default function PokemonCard({ nome, tipo, img }) {

  debugger
 /*  let imagens = {
    img1: img.front_default,
    img2: img.front_shiny,
  };
  const trocarimagem = () => {
    setImagem((state) => (state === "img1" ? "img2" : "img1"));
  };
  const [imagem, setImagem] = useState("img1"); */
  

   

  return (
    <div className="container-cardPokemon">
      <h3>{nome}</h3>
      <img src={img.front_default} />
      <p>{tipo}</p>
    {/*   <div style={{ marginTop: "15px" }}>
        <button onClick={trocarimagem}>
          Trocar para {imagem === "img1" ? "img2" : "img1"}
        </button>
      </div>
      <div style={{ marginTop: "15px" }}>
        <img src={imagens[imagem]} style={{ width: "75%" }} />
      </div> */}
    </div>
  );
}
