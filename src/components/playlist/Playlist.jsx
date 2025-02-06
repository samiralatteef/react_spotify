import React from "react";
import "./Playlist.css";
import Tracklist from "../tracklist/Tracklist.jsx";

function Playlist({ playListName, updateName, playListTracks, onRemoveTrack, onSave}) {
	
	function handlePlaylistName(event) {
		updateName(event.target.value);
	}

	// if(playListName === "")
	// alert ("Can't save playlist. No playlist typed")
	function handleSave(event){
		onSave();
	}

	return (
		<div className="Playlist">
			<input value={playListName} onChange={handlePlaylistName} />
			{/* <!-- Add a TrackList component --> */}
			<Tracklist
				searchResults={playListTracks}
				onAddTrack={false}
				onRemoveTrack={onRemoveTrack}
			/>
			<button onClick={handleSave} className="Playlist-save">Save To Spotify</button>
		</div>
	);
}

export default Playlist;
