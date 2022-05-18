import styled, { keyframes } from "styled-components";

const oscillation = keyframes`
    0% {
      transform: translateX(-${props => props.size + 30}vw);
    }
    50% {
      transform: translateX(${props => props.size + 30}vw);
    }
    100% {
      transform: translateX(-${props => props.size + 30}vw);      
    }
    `;

export const List = styled.ul`
display: flex;
flex-direction: row wrap;
flex: 2;
justify-content: space-evenly;
margin: auto;
`;

export const ListItem = styled.li`
color: var(--color-light);
text-align: center;
animation: ${oscillation} 3s linear infinite;
`;
export const ListImage = styled.img`
position: relative;
width: ${ props => props.size}%;
`;