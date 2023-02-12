import React from "react";

const NavBar = () => {
    const logo = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
    return (
        <nav>
            <div>
                <img
                    alt="logo-pokedex"
                    src={logo}
                    className="navBar-img"
                />
            </div>
        </nav>
    );
};
export default NavBar;
