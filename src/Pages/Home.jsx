import React, { useState, useEffect } from 'react';
import '../Css/pokemonCard.css';

const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=10';

const PokemonCard = ({ pokemon }) => (
  <div className="pokemon-card">
    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} onError={(e) => {
      e.target.onerror = null;
      e.target.src = "/default.png";
    }} />
    <h2>{pokemon.name}</h2>
    <p>Type: {pokemon.types && pokemon.types.length > 0 ? pokemon.types[0].type.name : 'Unknown'}</p>

  </div>
);

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(({ results }) => {
        setPokemonList(results);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPokemonList = pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="pokedex">
      <input type="text" placeholder="Search for a Pokemon" value={searchTerm} onChange={handleSearch} />
      {filteredPokemonList.map((pokemon, index) => (
        <PokemonCard key={index} pokemon={{ ...pokemon, id: index + 1 }} />
      ))}
    </div>
  );
};

export default Pokedex;
