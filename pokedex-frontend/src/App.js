
import React, {useEffect,useState} from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import SearchBar from "./Components/SearchBar/SearchBar";
import Pokedex from "./Components/Pokedex/Pokedex";
import { getPokemonData, getPokemons, searchPokemon } from "./api";


function App() {
 
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState([]);
 
  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons();
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promises);
      setPokemon(results);
      setLoading(false);
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  };
  
  useEffect(() =>{
    fetchPokemons()
  },[])

  const onSearchHandler = async (pokemon) => {
    if(!pokemon) {
      return fetchPokemons();
    }

    setLoading(true)

    const result = await searchPokemon(pokemon)
    if(!result) {

    } else {
    
    }
    setLoading(false)

  }
  return (
    <div>
      <NavBar />
      <SearchBar onSearch={onSearchHandler}/>
      <Pokedex  pokemon={pokemon}
          loading={loading}/>
      <div className="App"></div>

    </div>
  );
}

export default App;
