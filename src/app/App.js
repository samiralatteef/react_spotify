import "./App.css";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/searchbar/SearchBar.jsx";
import SearchResults from "../components/searchresults/SearchResults.jsx";
import Playlist from "../components/playlist/Playlist.jsx";
import { Spotify } from "../util/Spotify.js";

function App() {
	// state management (useState hooks)
	// initialise a state hook to store our search term
	const [searchTerm, setSearchTerm] = useState("");
	// initialise a state hook to store our search result
	const [searchResults, setSearchResults] = useState([]); // searchresults is an array of things
	// initialise a state hook to store our playlist as playListTracks
	const [playListTracks, setplayListTracks] = useState([]);
	// initialise a state hook to store our playlist name
	const [playListName, setplayListName] = useState(["Enter Playlist Name"]);

	// function to update playListName
	function updateName(name=""){
		setplayListName(name);
	}

	// function to manage the searchTerm
	function search(term = "") {
		setSearchTerm(term);
	}

	// function to run the search
	function runSearch() {
	// prepare the results after processing the search
	// alert("Searching...") to check if the function is called
	// prepare the results after procesing the search
	// const filteredSearch = searchResults.filter((result) => String(result.name).toLowerCase().includes(searchTerm.toLowerCase()));
	// 	setSearchResults(filteredSearch);

	// call Spotify search api to search for info. based on our search term
	Spotify.search(searchTerm).then((response) => {
		console.log(response);
		setSearchResults(response);
	});	
	}

	// function to save the playlist
	function savePlaylist(){
		// extract the tracks url for saving
		const tracksUri = playListTracks.map ((track) => track.uri);
		Spotify.savePlayList(playListName, tracksUri).then (() =>{
			setplayListName("My Playlist");
			setSearchResults([]);
			setplayListTracks([]);
			setSearchTerm("");
			alert("Your alert is saved")
		});

		// TODO What do I need to do to clear the searchbar
	}
	// function to add to the playlist
	// alert("Track added");
	function addTrack(trackId) {
		// use array.find() to find the track that match parameter trackId
		const track = searchResults.find((result) => result.id === trackId);

		// only if track does not exist in playListTracks
		// save the track to the Playlist
		// use the spread operator to unwrap existing tracks
		// and we add the selected track and store it as a new array in playlistTracks
		const trackNotExists = playListTracks.findIndex((track) => track.id ===trackId)
		if (trackNotExists === -1) {
			setplayListTracks([...playListTracks, track]);
		} 	
	}

	// function to remove from the Playlist
	// console.log("track removed" + trackId);
	function removeTrack(trackId) {
		// filter the track that do not have from the trackId passed in
		// we have the filtered track only
		const filteredTracks = playListTracks.filter((track) => track.id !== trackId);
		setplayListTracks(filteredTracks);
	}

	console.log(playListTracks);

	// useEffect() hook to prepare the page
	useEffect(() => {
		// execution statements here
		// Invoke Spotify to render our results

		// Retrieve a spotify token first at first page render
		Spotify.getAccessToken();

		// mock the search results
		// setSearchResults([
		// 	{
		// 		id: 1,
		// 		name: "Track 1",
		// 		album: "Track 1 Album",
		// 		artist: "Track 1 Artist",
		// 		url: "Track 1 URL",
		// 	},
		// 	{
		// 		id: 3,
		// 		name: "Track 3",
		// 		album: "Track 3 Album",
		// 		artist: "Track 3 Artist",
		// 		url: "Track 3 URL",
		// 	},
		// ]);
	}, []);

	//console.log(searchTerm);

	return (
		<div>
			<h1>
				spotify-<span className="highlight">sound</span>-scapes
			</h1>
			<div className="App">
				{/* <!-- Add a SearchBar component --> */}
				{/* passing in two function as properties into component: Searchbar. methods passing function*/}
				<SearchBar
					searchTerm={searchTerm}
					onSearch={search} 
					onRunSearch={runSearch}
					/>
				<div className="App-playlist">
					{/* <!-- Add a SearchResults component --> */}
					{/* passing in the state searchResults into component: SearchResults. property passing values (data) no need on keyword */}
					<SearchResults 
						searchResults={searchResults} 
						onAddTrack={addTrack} />
					{/* <!-- Add a Playlist component --> */}
					{/* assing in the state playListTracks into a component: Playlist */}
					<Playlist
						playListName={playListName}
						updateName={updateName}
						playListTracks={playListTracks}
						onRemoveTrack={removeTrack}
						onSave={savePlaylist}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;
