import React from "react";

const StarshipInformation = ( { starship, starshipThumbnail } ) => { 

  return (
    <div>
      <img src={ starshipThumbnail } alt="" />
      <p>Light and fast the { starship.name } is. Get there soon, you will.</p>
    </div >
  );
}

export default StarshipInformation;
