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
