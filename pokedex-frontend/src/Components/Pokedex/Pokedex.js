import React from "react";
import { PokedexHeader,PokedexGrid} from "./style";
import Pokemon from ""

const Pokedex = (props) => {
  const {pokemons,loading} = props
  
  return (
    <div>
    <PokedexHeader>
      <h1>Pokedex</h1>
      <div>Paginação</div>
    </PokedexHeader>
      {loading ? (
      <div>Carregando, guenta as pontas...</div>) : (
    <PokedexGrid>
        {pokemons.map((pokemons, index) =>{
         return(
         <div>
          <div>{pokemons.id}</div>
         <div>{pokemons.name}</div>
         </div>
         );
        })} 
      </PokedexGrid>
      )}
     </div>
  );
};

export default Pokedex;
