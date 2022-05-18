import React from "react";
import styled from "styled-components";

import { StyledHeader } from "./Headers.styled";

////** STYLES **////
const StyledPrimaryHeader = styled(StyledHeader)`
h1, h2 {
color: var(--color-light);
}
`;

////** COMPONENT **////
const PrimaryHeader = () => {
  ////** MARK UP **////
  return (
      <StyledPrimaryHeader >
        <h1>Yoda's Galaxial Vacations</h1>
        <h2>For Jedi, Sith, Padawans And Apprentices</h2>
      </StyledPrimaryHeader>
  );
}

export default PrimaryHeader;