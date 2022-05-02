import React from "react";

const PlanetInformation = ( { planet, planetThumbnail } ) => { 

  return (
    <div>
      <img src={ planetThumbnail } alt="" />
      Good choice, { planet.name } is. { planet.climate } climate, { planet.name } has. { planet.terrain }, see them all you will.
    </div >
  );
}

export default PlanetInformation;
