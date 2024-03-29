import React, { useRef, useState, useEffect } from 'react';
import './Control.css';
import PropTypes from 'prop-types';

import next from "../icons/flecha.png";

function Control({ roomId }) {
  const [tracks, setTracks] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const getTracks = async () => {
    let data;
    try {
      if(roomId == 1)
      {
        data = await fetch("https://v1.nocodeapi.com/leonardoaopa/spotify/qYopONAknLnSYbIr/search?q=SERTANEJO&type=track");
      }
      else if(roomId == 2)
      {
        data = await fetch("https://v1.nocodeapi.com/leonardoaopa/spotify/qYopONAknLnSYbIr/search?q=ROCK&type=track");
      }
      else if(roomId == 3)
      {
        data = await fetch("https://v1.nocodeapi.com/leonardoaopa/spotify/qYopONAknLnSYbIr/search?q=MPB&type=track");
      }
      else if(roomId == 4)
      {
        data = await fetch("https://v1.nocodeapi.com/leonardoaopa/spotify/qYopONAknLnSYbIr/search?q=POPInternacional&type=track");
      }
      else
      {
        data = await fetch("https://v1.nocodeapi.com/leonardoaopa/spotify/qYopONAknLnSYbIr/search?q=ELETROFUNK&type=track");
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
        <div key={tracks[currentTrackIndex].album.id} className="music-Container">
          <p className='music-Room-Name' >Atualmente em</p>
          <p className='music-Room-Name' >{localStorage.getItem('nameRoom')}</p>
          <p className='music-Head-Name'>{tracks[currentTrackIndex].name}</p>
          <p className='music-Artist-Name'>{tracks[currentTrackIndex].artists[0].name}</p>
          <img src={tracks[currentTrackIndex].album.images[0].url} alt="song Avatar" id='songAvatar' ></img>
          <audio name="musicProgressBar"  src={tracks[currentTrackIndex].preview_url} controls className="musicProgressBar"></audio>
          <div className="musics-butons">
          <button className="previous-music" onClick={showPreviousTrack} disabled={currentTrackIndex === 0}>
            <img src={next} />
          </button>
          <button className="next-music" onClick={showNextTrack} disabled={currentTrackIndex === tracks.length - 1}>
            <img src={next} />
          </button>    
          </div>
        </div>
      )}
    </div>
  );
}



export default Control;

Control.propTypes = {
  roomId: PropTypes.string,
};