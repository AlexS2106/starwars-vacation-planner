import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import companion1 from "../../images/companion-1.jpg";
import companion2 from "../../images/companion-2.jpg";
import companion3 from "../../images/companion-3.jpg";
import companion4 from "../../images/companion-4.jpg";
import companion5 from "../../images/companion-5.jpg";
import companion6 from "../../images/companion-6.jpg";
import companion7 from "../../images/companion-7.jpg";
import companion8 from "../../images/companion-8.jpg";
import companion9 from "../../images/companion-9.jpg";
import companion10 from "../../images/companion-10.jpg";

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
const CompanionCarousel = ( { companionList, ...props } ) => { 

  ////** FUNCTIONS **////
  const companions = companionList.map( ( planet, index ) => {
//Switch to get matching image.
    let companionImage;

    switch ( index ) { 
      case 0:
        companionImage = companion1;
        break;
      case 1:
        companionImage = companion2;
        break;
      case 2:
        companionImage = companion3;
        break;
      case 3:
        companionImage = companion4;
        break;
      case 4:
        companionImage = companion5;
        break;
      case 5:
        companionImage = companion6;
        break;
      case 6:
        companionImage = companion7;
        break;
      case 7:
        companionImage = companion8;
        break;
      case 8:
        companionImage = companion9;
        break;
      case 9:
        companionImage = companion10;
        break;
      default:
        companionImage = companion1;
        break;
    }

    return (
      <StyledLi key={ uuidv4() } onClick={ () => props.onClick(planet) } >
        <img src={ companionImage } alt="a companion" />
        <h2>{ planet }</h2>
      </StyledLi>
    );
  } );

  return (
    <StyledUl>
      {companions}
  </StyledUl>
  )
}

export default CompanionCarousel;