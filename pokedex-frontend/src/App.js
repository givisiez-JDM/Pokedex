
import React, {useEffect,useState} from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import SearchBar from "./Components/SearchPokemon/SearchPokemon";
import Pokedex from "./Components/Pokedex/Pokedex";
import { getPokemons } from "./api";


function App() {
 
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try{
      setLoading(true)
      const result = await getPokemons()
      setPokemons(result)
      setLoading(false)

    }catch(error){
      console.log(error)
    }
  }
  
  useEffect(() =>{
    fetchPokemons()
  },[])

  
  return (
    <div>
      <NavBar />
      <SearchBar />
      <Pokedex pokemons={pokemons} loading={loading}/>
      <div className="App"></div>

    </div>
  );
}

export default App;
