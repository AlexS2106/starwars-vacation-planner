import React from "react";
import styled from "styled-components";

import { SpinnerDiamond } from 'spinners-react';

import { StyledContainer } from "../layout/Containers.styled";

////** STYLES **////
const StyledSpinner = styled( StyledContainer )`
align-items: center;
p {
 color: var(--color-light);
 font-size: 5rem;
}
`;
const Spinner = () => {
  return (
    <StyledSpinner>
        <SpinnerDiamond size={ "200px" } color={ `var(--color-light)` } />
      <p>Using the force...</p>
    </StyledSpinner>
  )
}

export default Spinner;