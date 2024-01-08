import React, { useRef, useState, useEffect } from 'react';
import './Control.css';
import { element } from 'prop-types';

function Control() {
  const [tracks, setTracks] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const getTracks = async () => {
    try {
      let data = await fetch("https://v1.nocodeapi.com/lesnado/spotify/AuXXlbuHJUNOhWrv/search?q=JirayaUai&type=track");
      let convertedData = await data.json();
      setTracks(convertedData.tracks.items);
    } catch (error) {
      console.error("Error fetching tracks:", error);
    }
  }

  useEffect(() => {
    getTracks();
  }, []);

  const showNextTrack = () => {
    setCurrentTrackIndex((prevIndex) => prevIndex + 1);
  };

  const showPreviousTrack = () => {
    setCurrentTrackIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <div className="container">
      {tracks.length > 0 && (
        <div className="music-Container">
          <div key={tracks[currentTrackIndex].album.id} className='col'>
            <p className='music-Head-Name'>{tracks[currentTrackIndex].name}</p>
            <p className='music-Head-Name'>{tracks[currentTrackIndex].artists[0].name}</p>
            <img src={tracks[currentTrackIndex].album.images[0].url} alt="song Avatar" id='songAvatar' ></img>
            <button className='fa-solid fa-backward musicControler' onClick={showPreviousTrack} disabled={currentTrackIndex === 0}>Previous</button>
            <button className='fa-solid fa-forward musicControler' onClick={showNextTrack} disabled={currentTrackIndex === tracks.length - 1}>Next</button>
            <audio name="musicProgressBar"  src={tracks[currentTrackIndex].preview_url} controls className='W-1000'></audio>
          </div>
        </div>
      )}
    </div>
  );
}

export default Control;
