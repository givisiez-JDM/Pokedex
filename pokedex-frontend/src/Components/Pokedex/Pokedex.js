import React from "react";
import Pokemon from "../Pokemon/Pokemon";
import Pagination from "../Pagination/Pagination";
import { PokedexHeader, PokedexGrid, PokedexTitulo, PokedexContainer, TextLoading } from "./style";

const Pokedex = (props) => {
  const { pokemons, loading, page, setPage, totalPages } = props;

  const onLeftClickHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };
  const onRightClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <PokedexContainer>
      <PokedexHeader>
        <PokedexTitulo>Pokedex</PokedexTitulo>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onLeftClick={onLeftClickHandler}
          onRightClick={onRightClickHandler}
        />
      </PokedexHeader>
      {loading ? (
        <TextLoading>Carregando, guenta aí...</TextLoading>
      ) : (
        <PokedexGrid>
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <Pokemon key={index} pokemon={pokemon} />;
            })}
        </PokedexGrid>
      )}
    </PokedexContainer>
  );
};

export default Pokedex;
