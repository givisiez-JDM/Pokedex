
import React, {useEffect,useState} from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import SearchBar from "./Components/SearchPokemon/SearchPokemon";
import Pokedex from "./Components/Pokedex/Pokedex";
import { getPokemons,getPokemonData } from "./api";


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


  return (
    <div>
      <NavBar />
      <SearchBar />
      <Pokedex  pokemon={pokemon}
          loading={loading}/>
      <div className="App"></div>

    </div>
  );
}

export default App;
