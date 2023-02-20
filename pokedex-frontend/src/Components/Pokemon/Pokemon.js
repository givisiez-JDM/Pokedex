import React, { useContext } from "react";
import FavoriteContext from "../../contexts/favoritesContext";
import {
  Card,
  ImgPokemonContainer,
  CardBody,
  CardHeader,
  CardBottom,
  TypePokemon,
  PokemonButtonHeart,
  PokemonImg,
  TypeText,
} from "./style";

const Pokemon = (props) => {
  const { favoritePokemons, updateFavoritePokemons } =
    useContext(FavoriteContext);
  const { pokemon } = props;

  const onHeartClick = () => {
    updateFavoritePokemons(pokemon.name);
  };

  const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🖤";

  return (
    <div>
      <Card>
        <ImgPokemonContainer>
          <PokemonImg
            alt={pokemon.name}
            src={pokemon.sprites.front_default}
          ></PokemonImg>
        </ImgPokemonContainer>

        <CardBody>
          <CardHeader>
            <h3>{pokemon.name}</h3>
            <div>{pokemon.id}</div>
          </CardHeader>

          <CardBottom>
            <TypePokemon>
              {pokemon.types.map((type, index) => {
                return <TypeText key={index}>{type.type.name}</TypeText>;
              })}
            </TypePokemon>
            <PokemonButtonHeart onClick={onHeartClick}>
              {heart}
            </PokemonButtonHeart>
          </CardBottom>
        </CardBody>
      </Card>
    </div>
  );
};

export default Pokemon;
