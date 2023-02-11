import React, { useState } from "react";
import { searchPokemon } from "../../api";
import { SearchContainer,SearchBarDiv,SearchBarInput,SearchBtnButton } from "./style";
const SearchBar = () => {
  const [search, setSearch] = useState("dito");
  const [pokemon, setPokemon] = useState();

  const onChangeHandler = (event) => {
    setSearch(event.target.value)
  };
  const onClickHandler = () => {
    onSearchHeadler(search)
  }
  const onSearchHeadler = async (pokemon) => {
    const result = await searchPokemon(pokemon)
    setPokemon(result)
  }

  return (
    <SearchContainer>
      <SearchBarDiv>
        <SearchBarInput placeholder="Buscar Pokemon" onChange={onChangeHandler} />
      </SearchBarDiv>

      <div className="search-btn">
      <SearchBtnButton onClick={onClickHandler}>Buscar</SearchBtnButton>
        </div>
      {pokemon ? (
        <div>
          <div>{pokemon.name}</div>
          <div>{pokemon.weight}</div>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      ) : null}
    </SearchContainer>
  );
};

export default SearchBar;
