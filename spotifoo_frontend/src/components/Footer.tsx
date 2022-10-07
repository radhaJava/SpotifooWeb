import React from "react";
import picture from "./../assets/picture-no-album.png";
import play from "./../assets/icons/play.svg";
import "./../styles/Footer.css";


const Footer = () => {
  const handleClick =()=>{
    <audio className="audio">
          <source src="http://localhost:8080/music/andy-you-are-a-star.mp3"></source>
        </audio>
  }
  return (
    <div className="musicplayer">
     
        <article className="musicplayer-article">
             <img className="musicplayer-image" src ={picture}/>
            <div className="group-text">
              <text className ="song-name">Song Name</text>
              <text className="artist-name">Artist Name</text>
            </div>
            </article>
         <button className="music-button" onClick={handleClick}>
             <img className= "image-play"src={play}/>
             <audio className="audio">
          <source src="{`http://localhost:8080/${props.carddetails.pathToMusic}`}"></source>
        </audio>
         </button>
        
     
    </div>
  );
};

export default Footer;
