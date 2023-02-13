import React from "react";
import Pokemon from "../Pokemon/Pokemon";
import Pagination from "../Pagination/Paginationjs";
import { PokedexHeader, PokedexGrid } from "./style";

const Pokedex = (props) => {
  const { pokemon, loading ,page, setPage, totalPages } = props;

  const onLeftClickHandler = () => {
    if(page > 0) {
        setPage(page-1)
    }
}
const onRightClickHandler = () => {
    if(page+1 !== totalPages){
        setPage(page+1)
    }
}
  return (
    <div>
      <PokedexHeader>
        <h1>Pokedex</h1>
        <Pagination
            page={page+1}
            totalPages={totalPages}
            onLeftClick={onLeftClickHandler}
            onRightClick={onRightClickHandler}
        />
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
