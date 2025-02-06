import React from 'react'
import './Track.css';

function Track({track, onAddTrack, onRemoveTrack}) {

  function handleAddTrack(event){
    onAddTrack(track.id);
  }
  
  function handleRemoveTrack(event){
    onRemoveTrack(track.id);
  }

  // TODO: renderAction function (27)
  // another approach
//  function renderAction(event){
//     if(onAddTrack) onAddTrack(track.id);
//     if(onRemoveTrack) onRemoveTrack(track.id);
//   }
// {/* <button className="Track-action" onClick={renderAction}>
//         {/* <!-- + or - will go here --> */}
//         {onAddTrack && "+"}
//         {onRemoveTrack && "-"}
//       </button> */}

// 2nd approach
// function renderAction(){
//   return(
//     <button classname="Track-action" onClick={!onAddTrack ? handleRemoveTrack : handleAddTrack}>
//       {!onAddTrack ? `-` : `+`}
//     </button>
//   )
// }
  function renderAction(){
    if(!onAddTrack){
      return(
        <button className="Track-action" onClick={handleRemoveTrack}>
          {/* + or - will go here */}
          -
        </button>
      );
    }

    if(!onRemoveTrack){
      return(
        <button className="Track-action" onClick={handleAddTrack}>
          {/* + or - will go here */}
          +
        </button>
      );
    }
  }
  
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>
          {/* <!-- track name will go here --> */}
          {track.name}
        </h3>
        <p>
          {/* <!-- track artist will go here--> */} {/* <!-- track album will go here --> */}
          {track.artist} | {track.album}
        </p>
      </div>
      {renderAction()}
    </div>
  )
}

export default Track