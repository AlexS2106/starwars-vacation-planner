import React from "react";
import { v4 as uuidv4 } from "uuid";

import {
  List,
  ListItem,
  ListImage,
} from "./Carousels.styled";

import { fetchImage } from "../../../api/fetch.api";

  ////** COMPONENT **////
const Carousel = ( { list, ...props } ) => { 

  ////** FUNCTIONS **////
  const listItems = list.map( ( item ) => {

    const itemSpecs = {
      is: "",
      ...item,
    src: "",
    alt: "",
    size: undefined,
    xSpeed: undefined,
    yDisplay: undefined,
    }

    if ( item.name === "Yavin IV" ) {
      itemSpecs.is = "destination";
      itemSpecs.src = `planets/yavin.png`;
      itemSpecs.size = item.diameter * 0.01;
      itemSpecs.alt = "a planet";
      itemSpecs.xSpeed = item.orbital_period / 100;
      itemSpecs.yDisplay = item.rotation_period / itemSpecs.xSpeed;
    } else if ( item.name === "Bespin" ) {
      itemSpecs.is = "destination";
      itemSpecs.src = `planets/cloud-city.png`;
      itemSpecs.name = `Cloud City`;
      itemSpecs.size = (item.diameter / 20) * 0.01;
      itemSpecs.alt = "a planet"
      itemSpecs.xSpeed = item.orbital_period / 100;
      itemSpecs.yDisplay = item.rotation_period / itemSpecs.xSpeed;
    } else if ( item.climate ) {
      itemSpecs.is = "destination";
      itemSpecs.src = `planets/${ item.name.toLowerCase() }.png`;
      itemSpecs.size = item.diameter * 0.01;
      itemSpecs.alt = "a planet";
      itemSpecs.xSpeed = item.orbital_period / 100;
      itemSpecs.yDisplay = item.rotation_period / itemSpecs.xSpeed;
    } else if ( item.model ) { 
      itemSpecs.is = "modeOfTravel";
      itemSpecs.src = `starships/${item.name.toLowerCase().replaceAll(" ", "-")}.jpg`;
      itemSpecs.size = 100;
      itemSpecs.alt = "a starship"; 
    }

    return (
      <ListItem key={ uuidv4() } onClick={ () => props.onClick( itemSpecs ) } size={ itemSpecs.size }>
        <ListImage src={ fetchImage(itemSpecs.src) } alt={ itemSpecs.alt } size={ itemSpecs.size } />
          <h6>{ itemSpecs.name }</h6>
      </ListItem>
    );
  } );

  return (
    <List>
        { listItems }
    </List>
  );
}

export default Carousel;