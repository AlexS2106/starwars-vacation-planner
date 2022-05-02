import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
background-color: pink;
padding: 1rem;
`;

const Button = ( props ) => {
  
  return (
    <StyledButton onClick={ props.onClick }>{ props.btnText }</StyledButton>
  );
}

export default Button;