import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import SearchBar from "./Components/SearchPokemon/SearchPokemon";
import Pokedex from "./Components/Pokedex/Pokedex";

function App() {
  return (
    <div>
      <NavBar />
      <SearchBar />
      <Pokedex />
      <div className="App"></div>
    </div>
  );
}

export default App;
