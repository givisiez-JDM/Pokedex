import React from "react";


const NavBar = () => {
    const logo = "https://pokedex-grupo10.surge.sh/static/media/lgo.5511e54e001107cf3e5a.png"
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
