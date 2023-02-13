import React from "react";
import { Nav, NavBarImg } from "./style";

const NavBar = () => {
  const logo =
    "https://pokedex-grupo10.surge.sh/static/media/lgo.5511e54e001107cf3e5a.png";
  return (
    <Nav>
      <div>
        <NavBarImg alt="logo-pokedex" src={logo} className="navBar-img" />
      </div>
    </Nav>
  );
};
export default NavBar;
