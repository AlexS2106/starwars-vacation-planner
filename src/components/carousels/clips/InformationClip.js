import React from "react";

import {
  ClipContainer,
  MediaSideContainer,
} from "./InformationClips.styled";


////** COMPONENT **////
const InformationClip = ( { clip } ) => {
////** VARIABLES **////

////** MARK UP **////
  return (
    <ClipContainer>
      <h2>{ clip.name }</h2>
      <MediaSideContainer>
        <div>
          <video controls autoPlay src={ require( `../../../media/movie/EndorMovie.mp4` ) } type="video/mp4" />
        </div>
        <div>
          <p>Content here</p>
        </div>
      </MediaSideContainer>
    </ClipContainer>
  );
}

export default InformationClip;
