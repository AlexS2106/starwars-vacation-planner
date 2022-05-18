import React from "react";
import styled from "styled-components";

import space from "../../../media/images/space.png"; 

const StyledBg = styled.img`
width: 100%;
height: 100%;
position: fixed;
z-index: -1;
`;

const FullImageBg = () => { 
  return (
    <StyledBg src={ space } />
  )
}

export default FullImageBg;