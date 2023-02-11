import React, {useState } from "react";
import { searchPokemon } from "../../api";

const SearchBar = () =>{
  const [search, setSearch] = useState("dito");
  const [pokemon, setPokemon]=  useState();

  const onChangeHandler = (event) => {
    setSearch(event.target.value)
  };
  const onClickHandler = () =>{
    onSearchHeadler(search)
  }
  const onSearchHeadler = async (pokemon) =>{
    const result = await searchPokemon(pokemon)
    setPokemon(result)
  }

  return (
    <div className="search-container">
      <div className="searchBar">
        <input placeholder="Buscar Pokemon" onChange={onChangeHandler} />
      </div>

      <div className="search-btn">
        <button  onClick={onClickHandler}>Buscar</button>
      </div>
      {pokemon ? (
        <div>
           <div>{pokemon.name}</div>
           <div>{pokemon.weight}</div>
           <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
        </div>
      ) : null}
    </div>
  );
};

export default SearchBar;
