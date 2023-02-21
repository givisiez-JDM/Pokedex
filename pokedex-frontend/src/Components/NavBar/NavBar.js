import React, { useContext } from "react";
import FavoriteContext from "../../contexts/favoritesContext";
import { Nav, NavBarImg ,DivFavoritos} from "./style";

const NavBar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  const logo =
    "https://pokedex-grupo10.surge.sh/static/media/lgo.5511e54e001107cf3e5a.png";
  return (
    <Nav>
      <div>
        <NavBarImg  alt="logo-pokedex" src={logo}  />
      </div>

      <DivFavoritos>Favoritos: {favoritePokemons.length}❤️</DivFavoritos>
    </Nav>
  );
};
export default NavBar;
