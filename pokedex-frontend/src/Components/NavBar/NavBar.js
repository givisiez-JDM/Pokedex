import React from "react";
<<<<<<< HEAD

const NavBar = () => {
    const logo = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return (
        <nav>
            <div>
                <img
=======
import { Nav,NavBarImg } from "./style";

const NavBar = () => {
    const logo = "https://pokedex-grupo10.surge.sh/static/media/lgo.5511e54e001107cf3e5a.png"
    return (
        <Nav>
            <div>
                <NavBarImg
>>>>>>> 686beaf0612ab641044ceb642871d68b166a58c2
                    alt="logo-pokedex"
                    src={logo}
                    className="navBar-img"
                />
            </div>
<<<<<<< HEAD
        </nav>
=======
            
        </Nav>
>>>>>>> 686beaf0612ab641044ceb642871d68b166a58c2
    );
};
export default NavBar;
