import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

////** STYLES **////
const SpacerDiv = styled.div`
border: 1px solid transparent;
margin-top: ${props => props.size}rem;
`;

////** COMPONENT **////
const Spacer = ( { size } ) => { 

////** MARK UP **////
  return (
    <SpacerDiv role="none" size={ size }/>
  )
}

////** PROP-TYPES **////
Spacer.propTypes = {
  size: PropTypes.number,
};

export default Spacer;