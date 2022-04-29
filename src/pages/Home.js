import React, { useState } from "react";

import Button from "../components/buttons/Button";
import PrimaryHeader from "../components/headers/PrimaryHeader";
import PrimaryFooter from "../components/footers/PrimaryFooter";

import { baseURL } from "../utilities/baseURL";

const Home = () => {

  const [ isLoading, setIsLoading ] = useState( false );
  const [ names, setNames ] = useState( [] );
  const [ planets, setPlanets ] = useState( [] );
  const [ starships, setStarships ] = useState( [] );

  async function getPeopleHandler () {
    setIsLoading( true );

    const response = await fetch( `${ baseURL }/people` );
    const { results } = await response.json();
    const names = results.map( result => result.name )
    setNames( names );
    
    setIsLoading( false );
  };


  async function getPlanetHandler () {
  setIsLoading( true );

    const response = await fetch( `${ baseURL }/planets` );
    const { results } = await response.json();
    const planets = results.map( result => result.name )
    setPlanets( planets );

  setIsLoading(false)
  };

  async function getStarshipsHandler () { 
    setIsLoading( true );

    const response = await fetch( `${ baseURL }/starships` );
    const { results } = await response.json();
    const starships = results.map( result => result.name );
    setStarships(starships)

    setIsLoading( false );
  }

const loader = <p>Fetching stuff with the fetch API! </p>


  return (
    <>
      <PrimaryHeader />
      { isLoading ? loader : null }
            <button onClick={ getPeopleHandler } variant="secondary"  >Choose a companion</button>
      <ul>
        { names.map( name => <li>{ name }</li>)}
      </ul>

      <Button onClick={ getPlanetHandler }>Choose a planet to see</Button>
      <ul>
      { planets.map( planet => <li>{ planet }</li> ) }
      </ul>

      <button onClick={ getStarshipsHandler }>Choose a starship to ride in</button>
      <ul>
      { starships.map( starship => <li>{ starship }</li> ) }
      </ul>

      <PrimaryFooter />
      </>
)
}

export default Home;