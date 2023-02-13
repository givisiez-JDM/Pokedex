import React from "react";
import Pokemon from "../Pokemon/Pokemon";
import { PokedexHeader, PokedexGrid } from "./style";

const Pokedex = (props) => {
  const { pokemon, loading } = props;

  return (
    <div>
      <PokedexHeader>
        <h1>Pokedex</h1>
        <div>Paginação</div>
      </PokedexHeader>
      {loading ? (
        <div>Carregando, guenta aí...</div>
      ) : (
        <PokedexGrid>
          {pokemon &&
            pokemon.map((pokemon, index) => {
              return <Pokemon key={index} pokemon={pokemon} />;
            })}
        </PokedexGrid>
      )}
    </div>
  );
};

export default Pokedex;
