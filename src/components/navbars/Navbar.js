import React from "react";
import { v4 as uuidv4 } from "uuid";

import { StyledNavbar } from "./Navbars.styled";

////** COMPONENT **////
const Navbar = () => { 

////** VARIABLES **////
  //Array of site pages
  const pages = [ "Planets", "Starships", "Companions", "Vehicle Hire" ];

////** FUNCTIONS **////
  //Make pages into list items
  const navItems = pages.map( page => <li key={ uuidv4() }>{ page }</li> );

  ////** MARK UP **////
  return (
    <StyledNavbar light >
      <ul>
        { navItems }
      </ul>
    </StyledNavbar>
  );
}

export default Navbar;