<<<<<<< HEAD
import React from "react";

const SearchPokemon = () => {
  const search = "nome";
  const onChangeHandler = (event) => {
    search = event.target.value;
  };

  return (
    <div className="search-container">
      <div className="searchPokemon">
        <input placeholder="Buscar Pokemon" onChange={onChangeHandler} />
        {search}
      </div>
    </div>
  );
};

export default SearchPokemon;
=======
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
>>>>>>> 686beaf0612ab641044ceb642871d68b166a58c2
