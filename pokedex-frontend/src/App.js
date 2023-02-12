
import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import SearchBar from "./Components/SearchPokemon/SearchPokemon";
import Pokedex from "./Components/Pokedex/Pokedex";
import SearchPokemon from "./Components/SearchPokemon/SearchPokemon";

function App() {
  return (
    <div>
      <NavBar />

      <SearchPokemon />
      <SearchBar />
      <Pokedex />
      <div className="App"></div>

    </div>
  );
}

export default App;
