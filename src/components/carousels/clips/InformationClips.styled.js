import styled, { keyframes } from "styled-components";

const rotate = keyframes`
from {
  transform: rotate(0);
}
to {
  transform: rotate(360deg);      
}
`;
const slideIn = keyframes`
from {
  transform: translate(-500%);
}
to {
  transform: translate(0);      
}
`;

export const ClipContainer = styled.div`
display: flex;
flex-direction: column;
flex: 1;
margin: auto;
align-items: center;

h2 {
  color: var(--color-light);
}

`;

export const MediaSideContainer = styled.div`
display: grid;
grid-template-columns: 45vw 45vw;
gap: 5vw;
color: var(--color-light);
video {
  width: 100%;
}
`;
