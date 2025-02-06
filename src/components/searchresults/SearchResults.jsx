import React from 'react'
import './SearchResults.css'
import '../tracklist/Tracklist'
import Tracklist from '../tracklist/Tracklist'

function SearchResults({searchResults, onAddTrack}) { 

  // destructure/unwrapped
  // console.log(SearchResults[0]);

  return (
    <div className='SearchResults'>
      <h2>Search Results</h2>
       {/* import tracklist here */}
      <Tracklist 
        searchResults={searchResults} 
        onAddTrack={onAddTrack}
        onRemoveTrack={false}
      />
    </div>
  )
}

export default SearchResults