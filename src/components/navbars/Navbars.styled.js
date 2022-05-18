import styled from "styled-components";

export const StyledNavbar = styled.nav`
ul {
display: flex;
flex-direction: row;
flex: 2;
justify-content: space-around;
}

li {
  color: var${( props ) => props.light ? `(--color-light)` : `(--color-dark)`  };
  text-transform: uppercase;
  padding: 1rem;
}

`;