import React, { useState } from "react";

const SearchPokemon = () => {
  const [search, setSearch] = useState("dito");
  const onChangeHandler = (event) => {
    setSearch(event.target.value);
  };

  const onClickHandler = () =>{

  }

  
  return (
    <div className="search-container">
      <div className="searchPokemon">
        <input placeholder="Buscar Pokemon" onChange={onChangeHandler} />
      </div>

      <div className="search-btn">
        <button onClick={onClickHandler}>Buscar</button>
      </div>
    </div>
  );
};

export default SearchPokemon;
