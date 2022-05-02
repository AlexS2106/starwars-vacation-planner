import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import planet1 from "../../images/planet-1.png";
import planet2 from "../../images/planet-2.png";
import planet3 from "../../images/planet-3.png";
import planet4 from "../../images/planet-4.png";
import planet5 from "../../images/planet-5.png";
import planet6 from "../../images/planet-6.png";
import planet7 from "../../images/planet-7.png";
import planet8 from "../../images/planet-8.png";
import planet9 from "../../images/planet-9.png";
import planet10 from "../../images/planet-10.png";

  ////** STYLES **////
const StyledPlanetsUl = styled.ul`
display: flex;
flex-direction: row;
flex: 1;
justify-content: space-evenly;
width: 80%;
margin: auto;
`;
const StyledPlanetLi = styled.li`
list-style-type: none;
`;

  ////** COMPONENT **////
const PlanetaryCarousel = ( { planetList, ...props } ) => { 

  ////** FUNCTIONS **////
  const planets = planetList.map( ( planet, index ) => {
//Switch to get matching image.
    let planetImage;

    switch ( index ) { 
      case 0:
        planetImage = planet1;
        break;
      case 1:
        planetImage = planet2;
        break;
      case 2:
        planetImage = planet3;
        break;
      case 3:
        planetImage = planet4;
        break;
      case 4:
        planetImage = planet5;
        break;
      case 5:
        planetImage = planet6;
        break;
      case 6:
        planetImage = planet7;
        break;
      case 7:
        planetImage = planet8;
        break;
      case 8:
        planetImage = planet9;
        break;
      case 9:
        planetImage = planet10;
        break;
      default:
        planetImage = planet1;
        break;
    }

    return (
      <StyledPlanetLi key={ uuidv4() } onClick={ () => props.onClick(planet) } >
        <img src={ planetImage } alt="a planet" />
        <h2>{ planet }</h2>
      </StyledPlanetLi>
    );
  } );

  return (
    <StyledPlanetsUl>
      {planets}
  </StyledPlanetsUl>
  )
}

export default PlanetaryCarousel;