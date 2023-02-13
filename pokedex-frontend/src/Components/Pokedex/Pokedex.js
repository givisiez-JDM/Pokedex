import React from "react";
import { PokedexHeader, PokedexGrid } from "./style";
import Pokemon from "../Pokemon/Pokemon";

const Pokedex = (props) => {
  const { pokemon, loading } = props;

  return (
    <div>
      <PokedexHeader>
        <h1>Pokedex</h1>
        <div>Paginação</div>
      </PokedexHeader>
      {loading ? (
        <div>Carregando, guenta as pontas...</div>
      ) : (
        <PokedexGrid>
          {pokemon && pokemon.map((pokemon, index) => {
            return (
              <Pokemon key={index}  pokemon={pokemon}/>
            );
          })}
        </PokedexGrid>
      )}
    </div>
  );
};

export default Pokedex;
