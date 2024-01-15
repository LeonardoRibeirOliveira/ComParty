import React, { useRef, useState, useEffect } from 'react';
import './Control.css';
import PropTypes from 'prop-types';

import next from "../icons/flecha.png";

function Control({ roomId }) {
  const [tracks, setTracks] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  console.log(roomId, "AOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOpa");
  const getTracks = async () => {
    let data;
    try {
      if(roomId == 1)
      {
        data = await fetch("https://v1.nocodeapi.com/leonardoribeiro/spotify/aCKDBJwfRkXQMhqn/search?q=Sertanejo&type=track&perPage=50");
      }
      else if(roomId == 2)
      {
        data = await fetch("https://v1.nocodeapi.com/leonardoribeiro/spotify/aCKDBJwfRkXQMhqn/search?q=ACDC&type=track&perPage=50");
      }
      else if(roomId == 3)
      {
        data = await fetch("https://v1.nocodeapi.com/leonardoribeiro/spotify/aCKDBJwfRkXQMhqn/search?q=MPB&type=track&perPage=50");
      }
      else if(roomId == 4)
      {
        data = await fetch("https://v1.nocodeapi.com/leonardoribeiro/spotify/aCKDBJwfRkXQMhqn/search?q=PopMusic&type=track&perPage=50");
      }
      else
      {
        data = await fetch("https://v1.nocodeapi.com/leonardoribeiro/spotify/aCKDBJwfRkXQMhqn/search?q=Eletrofunk&type=track&perPage=50");
      }
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
            <audio name="musicProgressBar"  src={tracks[currentTrackIndex].preview_url} controls className='W-1000'></audio>
            <div className="musics-butons">
            <button className="previous-music" onClick={showPreviousTrack} disabled={currentTrackIndex === 0}>
              <img src={next} />
            </button>
            <button className="next-music" onClick={showNextTrack} disabled={currentTrackIndex === tracks.length - 1}>
              <img src={next} />
            </button>    
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



export default Control;

Control.propTypes = {
  roomId: PropTypes.string.isRequired, // ou o tipo de dados correto para 'roomId'
};