import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Spectral&display=swap');

*,
*:before,
*:after {
  padding: 0;
  margin: 0;
}
html,
body {
  font-size: 62.5%;
  font-family: 'Spectral', serif;
  box-sizing: border-box;
  box-sizing: inherit;
  --color-dark: #21242b;
  --color-accent-dark: #1c1026;
  --color-accent-mid: #4c1e3c;
  --color-accent-light: #7a748c;
  --color-light: #fef9ff;
  
  --color-correct: green;
  --color-incorrect: red;
  
  padding: 0;
  margin: 0;
}
p, li {
  font-size: 1.7rem;
  letter-spacing: .05rem;
  line-height: 2.8rem;
 }
img {
  border-radius: 5px;
}
h1,
h2,
h3,
h4,
h5,
h6,
nav,
a, 
button,
time,
address {
  letter-spacing: .3rem;
  padding: .5rem;
}
cite {
  text-align: end;
}
 h1 {
  font-size: 3.5rem;
 }
 h2 {
  font-size: 2.5rem
 }
 h3 {
  font-size: 2rem
 }
 h4,
 h5,
 h6 {
   font-size: 1.9rem;
 }
 address,
 time {
   font-size: 1.4rem;
   font-style: italic;
 }
 a, button, li {
    font-size: 1.6rem;
    text-decoration: none;
    cursor: pointer;
    border: none;
 }
 ol, ul, li {   
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

export default GlobalStyles;