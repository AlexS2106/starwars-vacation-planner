import React from "react";
import { StyledButton } from "./Buttons.styled";

const TextButton = ( props ) => {
  
  return (
    <StyledButton onClick={ props.onClick }>{ props.btnText }</StyledButton>
  );
}

export default TextButton;