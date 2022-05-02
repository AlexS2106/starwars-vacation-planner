import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/buttons/Button";
import CompanionCarousel from "../components/carousels/CompanionCarousel";
import CompanionInformation from "../components/display/CompanionInformation";
import PlanetaryCarousel from "../components/carousels/PlanetaryCarousel";
import PlanetInformation from "../components/display/PlanetInformation";
import PrimaryHeader from "../components/headers/PrimaryHeader";
import PrimaryFooter from "../components/footers/PrimaryFooter";
import StarshipCarousel from "../components/carousels/StarshipCarousel";
import StarshipInformation from "../components/display/StarshipInformation";

import { baseURL } from "../utilities/baseURL";

const Home = () => {
  let navigate = useNavigate();
  ////** STATE **////
  //Loading
  const [ isLoading, setIsLoading ] = useState( false );
  //Use choice of one destination
  const [ holiday, setHoliday ] = useState(
    {
      destination: {},
      modeOfTravel: {},
      companion: {},
    }
  );
  //Temporarily holds user choice prior to confirmation
  const [ isConfirmed, setIsConfirmed ] = useState( {
    destination: false,
    modeOfTravel: false,
    companion: false,
  } );
  //Array of all planet information
  const [ planets, setPlanets ] = useState( [] );
  //Array of all starships available for travel
  const [ starships, setStarships ] = useState( [] );
  //Array of all possible companions for the vacation
  const [ companions, setCompanions ] = useState( [] );

//Initial population of the array of planets information, this information should not change after the initial fetching
  useEffect( () => {
    async function getPlanets () {
      setIsLoading( true );
      setIsConfirmed( {
        destination: false,
        modeOfTravel: false,
        companion: false,
      } );
      const response = await fetch( `${ baseURL }/planets` );
      const { results } = await response.json();
      const planets = results.map( result => result );
      setPlanets( planets );
      setIsLoading( false );
    }
    getPlanets();
  }, [] );
//Fetches all data from SWAPI based on an arg
  async function fetchHandler ( whatToFetch ) { 
    let endpoint;
    if ( whatToFetch === planets ) { endpoint = "planets" }
    if ( whatToFetch === starships ) { endpoint = "starships" }
    if ( whatToFetch === companions ) { endpoint = "people" }
    const response = await fetch( `${ baseURL }/${ endpoint }` );
    const { results } = await response.json();
    const resultsArray = results.map( result => result );
    if ( whatToFetch === planets ) { setPlanets( resultsArray ) };
    if ( whatToFetch === starships ) { setStarships( resultsArray ) };
    if ( whatToFetch === companions ) { setCompanions( resultsArray ) };

  }
    //Awaits user clicking on a photo, displays more about the chosen photo and adds the information on what is chosen to holiday state
  function photoClickedHandler ( e ) {
        setIsLoading( true );
    const chosenStarship = starships.filter( starship => starship.name === e );
    const chosenCompanion = companions.filter( companion => companion.name === e );
    const chosenPlanet = planets.filter( planet => planet.name === e );
    if ( chosenPlanet.length ) {
      setHoliday( ( prevValues ) => ( {
        ...prevValues,
        destination: chosenPlanet[ 0 ],
      } ) );
    } else if ( chosenStarship.length ) {
      setHoliday( ( prevValues ) => ( {
        ...prevValues,
        modeOfTravel: chosenStarship[ 0 ]
      } ) );
    } else if ( chosenCompanion.length ) {
      setHoliday( ( prevValues ) => ( {
        ...prevValues,
        companion: chosenCompanion[ 0 ]
      } ) );
    } else { 
      const err = new Error( "photo clicked handler error" );
      console.log( err );
    }
        setIsLoading( false );
  };
  //Acts on the user confirmation of various stages of the holiday and brings in more data apprpriate to the stage
  async function confirmationHandler ( value ) { 
    setIsLoading( true );
    if ( value === "destination" ) {
      fetchHandler( starships );
      setIsConfirmed( (prevValues) => ( {
        ...prevValues,
        destination: true,
      } ) );
    } else if ( value === "modeOfTravel" ) {
      fetchHandler( companions );
      setIsConfirmed( (prevValues) => ( {
        ...prevValues,
        modeOfTravel: true,
      } ) );
    } else if ( value === "companion" ) {
      fetchHandler( companions );
      setIsConfirmed( (prevValues) => ( {
        ...prevValues,
        companion: true,
      } ) );
    } else { 
      const err = new Error( "confirmationhandler error" );
      console.log( err );
    }
    setIsLoading( false );
  }

  function confirmedAllHandler () {
   navigate("holiday")
   }

  const loader = <p>Using the force...</p>

  return (
    <>
      <PrimaryHeader />

      { isLoading ? loader : null }

      <h3>Your next vacation. Choose your planet, you will?</h3>
      {/*Initial start with all planets showing*/ }
      <PlanetaryCarousel planetList={ planets.map( planet => planet.name ) } onClick={ photoClickedHandler } />

      {/*Choose a planet*/ }
      { Object.keys( holiday.destination ).length !== 0 ? <PlanetInformation planet={ holiday.destination } /> : null }

      {/*Confirm the planet*/ }
      { Object.keys( holiday.destination ).length !== 0 && !isConfirmed.destination ?
        <Button onClick={ () => confirmationHandler("destination") } btnText={ `Confirm ${ holiday.destination.name } planet, would you like?` } /> : null }
      
      {/*Planet confirmed, show all starships*/ }
      { starships.length !== 0 ?
        ( <>
          <h3>Your way to get there, choose you will.</h3>
          <StarshipCarousel starshipList={ starships.map( starship => starship.name ) } onClick={ photoClickedHandler } />
        </> ) : null }
      
      {/*Choose a starship*/ }
      { Object.keys( holiday.modeOfTravel ).length !== 0 ? <StarshipInformation starship={ holiday.modeOfTravel } /> : null }

      {/*Confirm the starship*/ }
      { Object.keys( holiday.modeOfTravel ).length !== 0 && !isConfirmed.modeOfTravel ?
        <Button onClick={ () => confirmationHandler("modeOfTravel") } btnText={ `Confirm ${ holiday.modeOfTravel.name } starship, would you like?` } /> : null }
      
      {/*Starship confirmed, show companions*/ }
      { companions.length !== 0 ? <CompanionCarousel companionList={ companions.map( companion => companion.name ) } onClick={ photoClickedHandler } /> : null }

      {/*Choose a companion*/ }
      { Object.keys( holiday.companion ).length !== 0 ? <CompanionInformation companion={ holiday.companion } /> : null }
      
      {/*Confirm the companion*/ }
      { Object.keys( holiday.companion ).length !== 0 && !isConfirmed.companion ? <Button onClick={ () => confirmationHandler("companion") } btnText={ `Confirm ${ holiday.companion.name } as your companion, would you like?` } /> : null }
      
      {/*Planet, starship and companion chosen - request user's final confirmation*/ }
      { isConfirmed.destination && isConfirmed.modeOfTravel && isConfirmed.companion ?
        ( <>
          <p>Chosen you have { holiday.destination.name }, travel you will { holiday.modeOfTravel.name }, companion you will with { holiday.companion.name }</p>
          <Button onClick={ confirmedAllHandler } btnText="Confirm all, you will?" />
        </> ) : null }

      <PrimaryFooter />
    </>
  );
}

export default Home;