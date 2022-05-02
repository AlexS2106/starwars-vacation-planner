import React from "react";

const CompanionInformation = ( { companion, companionThumbnail } ) => { 

  return (
    <div>
      <img src={ companionThumbnail } alt="" />
      Good choice, { companion.name } see them all you will.
    </div >
  );
}

export default CompanionInformation;