import React from "react";
import styled from 'styled-components'

const Button = (props) => {
  const Button = styled.button`
  backgroundColor: pink,
  padding: 1rem,
  `;

  return (
    <Button onClick={ props.onClick }> Click here</Button>
  )
}

export default Button;