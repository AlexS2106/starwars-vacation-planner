import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import starship1 from "../../images/starship-1.jpg";
import starship2 from "../../images/starship-2.jpg";
import starship3 from "../../images/starship-3.jpg";
import starship4 from "../../images/starship-4.jpg";
import starship5 from "../../images/starship-5.jpg";
import starship6 from "../../images/starship-6.jpg";
import starship7 from "../../images/starship-7.jpg";
import starship8 from "../../images/starship-8.jpg";
import starship9 from "../../images/starship-9.jpg";
import starship10 from "../../images/starship-10.jpg";

  ////** STYLES **////
const StyledUl = styled.ul`
display: flex;
flex-direction: row;
flex: 1;
justify-content: space-evenly;
width: 80%;
margin: auto;
`;
const StyledLi = styled.li`
list-style-type: none;
`;

  ////** COMPONENT **////
const StarshipCarousel = ( { starshipList, ...props } ) => { 

  ////** FUNCTIONS **////
  const starships = starshipList.map( ( starship, index ) => {
//Switch to get matching image.
    let starshipImage;

    switch ( index ) { 
      case 0:
        starshipImage = starship1;
        break;
      case 1:
        starshipImage = starship2;
        break;
      case 2:
        starshipImage = starship3;
        break;
      case 3:
        starshipImage = starship4;
        break;
      case 4:
        starshipImage = starship5;
        break;
      case 5:
        starshipImage = starship6;
        break;
      case 6:
        starshipImage = starship7;
        break;
      case 7:
        starshipImage = starship8;
        break;
      case 8:
        starshipImage = starship9;
        break;
      case 9:
        starshipImage = starship10;
        break;
      default:
        starshipImage = starship1;
        break;
    }

    return (
      <StyledLi key={ uuidv4() } onClick={ () => props.onClick(starship) } >
        <img src={ starshipImage } alt="a starship" />
        <h2>{ starship }</h2>
      </StyledLi>
    );
  } );

  return (
    <StyledUl>
      { starships }
    </StyledUl>
  );
}

export default StarshipCarousel;