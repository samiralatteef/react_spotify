import React, {useEffect} from 'react';
import './Tracklist.css';
import Track from '../track/Track.jsx';

function Tracklist({searchResults, onAddTrack, onRemoveTrack}) {
  return (
    <div className="TrackList">
    {/* <!-- You will add a map method that renders a set of Track components  --> */}
    {/* anfn and fa injects arrow function */}
    {searchResults && searchResults.map((result) =>
        <Track 
        track={result}
        onAddTrack={onAddTrack}
        onRemoveTrack={onRemoveTrack}
        /> 
      )}
    </div>
  )
}

export default Tracklist