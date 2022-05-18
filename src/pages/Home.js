import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Carousel from "../components/carousels/lists/Carousel";
import FullImageBg from "../components/display/bgs/FullImageBg";
import InformationClip from "../components/carousels/clips/InformationClip";
import Navbar from "../components/navbars/Navbar";
import PrimaryHeader from "../components/headers/PrimaryHeader";
import PrimaryFooter from "../components/footers/PrimaryFooter";
import Spacer from "../components/layout/Spacer";
import Spinner from "../components/spinners/Spinner";
import { StyledLargeContainer } from "../components/layout/Containers.styled";
import { StyledP } from "../components/display/typography/Typography.styled";
import TextButton from "../components/buttons/TextButton";

import { resultsCaller } from "../api/fetch.api";

////** COMPONENTS **////
const Home = () => {
////** HOOKS  **////
  let navigate = useNavigate();
  ////** STATE & CONTEXT **////
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
      const callEndpoint = `planets`;
      const results = await resultsCaller(callEndpoint);
      const planets = results.map( result => result );
      setPlanets( planets );
      setIsLoading( false );
    }
    getPlanets();
  }, [] );
//Fetches all data from SWAPI based on an arg
  async function fetchHandler ( whatToFetch ) { 
    let endpoint;
    if ( whatToFetch === "destination" ) { endpoint = `planets` }
    if ( whatToFetch === "modeOfTravel" ) { endpoint = `starships` }
    if ( whatToFetch === "companion" ) { endpoint = `people` }
    const results = await resultsCaller(endpoint);
    const resultsArray = results.map( result => result );
    if ( whatToFetch === "destination" ) { setPlanets( resultsArray ) };
    if ( whatToFetch === "modeOfTravel" ) { setStarships( resultsArray ) };
    if ( whatToFetch === "companion" ) { setCompanions( resultsArray ) };

  }
    //Awaits user clicking on a photo, displays more about the chosen photo and adds the information on what is chosen to holiday state
  function photoClickedHandler ( e ) {
    setIsLoading( true );
    console.log(e)
    setHoliday( ( prevValues ) => ( {
      ...prevValues,
        [ e.is ]: e,
      } ) );
    setIsLoading( false );
  };
  //Acts on the user confirmation of various stages of the holiday and brings in more data apprpriate to the stage
  async function confirmationHandler ( value ) { 
    setIsLoading( true );
    const values = [ "destination", "modeOfTravel", "companion" ];
    const num = values.indexOf( value );
    setIsConfirmed( (prevValues) => ( {
      ...prevValues,
      [values[num]]: true,
    } ) );
    fetchHandler( values[ num + 1 ] );
    setIsLoading( false );
  }

  function confirmedAllHandler () {
    navigate( "holiday" );
  }

  return (
    <StyledLargeContainer>
      <FullImageBg />
      <Navbar />
      <PrimaryHeader />
      <Spacer size={ 3 } />
      { isLoading ? <Spinner /> : null }

      {/*Initial start with all planets showing*/ }
      { Object.keys( holiday.destination ).length === 0 ?
        ( <>
          <Carousel list={ planets } onClick={ photoClickedHandler } />
          <Spacer size={ 1 } />
          <StyledP>Your destination, choose wisely you must.</StyledP>
        </> ) : null }

      {/*Choose a planet*/ }
      { Object.keys( holiday.destination ).length !== 0 ?
        ( <>
          <InformationClip clip={ holiday.destination } />
          <Spacer size={ 3 } />
          </> ) : null }

      {/*Confirm the planet*/ }
      { Object.keys( holiday.destination ).length !== 0 && !isConfirmed.destination ?
        (
          <>
            <TextButton onClick={ () => confirmationHandler( "destination" ) } btnText={ `Confirm ${ holiday.destination.name } planet, would you like?` } /> 
            <Spacer size={ 3 } />
          </> ) : null }
      
      {/*Planet confirmed, show all starships*/ }
      { starships.length !== 0 ?
        ( <>
          <StyledP>How to get there, choose your own way, you will.</StyledP>
          <Spacer size={ 2 } />
          <Carousel list={ starships } onClick={ photoClickedHandler } />
        </> ) : null }
      
      {/*Choose a starship*/ }
      { Object.keys( holiday.modeOfTravel ).length !== 0 ? <InformationClip starship={ holiday.modeOfTravel } /> : null }

      {/*Confirm the starship*/ }
      { Object.keys( holiday.modeOfTravel ).length !== 0 && !isConfirmed.modeOfTravel ?
        <TextButton onClick={ () => confirmationHandler( "modeOfTravel" ) } btnText={ `Confirm ${ holiday.modeOfTravel.name } starship, would you like?` } /> : null }
      
      {/*Starship confirmed, show companions*/ }
      { companions.length !== 0 ? <Carousel companionList={ companions } onClick={ photoClickedHandler } /> : null }

      {/*Choose a companion*/ }
      { Object.keys( holiday.companion ).length !== 0 ? <InformationClip companion={ holiday.companion } /> : null }
      
      {/*Confirm the companion*/ }
      { Object.keys( holiday.companion ).length !== 0 && !isConfirmed.companion ? <TextButton onClick={ () => confirmationHandler( "companion" ) } btnText={ `Confirm ${ holiday.companion.name } as your companion, would you like?` } /> : null }
      
      {/*Planet, starship and companion chosen - request user's final confirmation*/ }
      { isConfirmed.destination && isConfirmed.modeOfTravel && isConfirmed.companion ?
        ( <>
          <StyledP>Chosen you have { holiday.destination.name }, travel you will { holiday.modeOfTravel.name }, companion you will with { holiday.companion.name }</StyledP>
          <TextButton onClick={ confirmedAllHandler } btnText="Confirm all, you will?" />
        </> ) : null }

      <PrimaryFooter />
    </StyledLargeContainer>
  );
}

export default Home;