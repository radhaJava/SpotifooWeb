import React from "react";
import picture from "./../assets/picture-no-album.png";
import play from "./../assets/icons/play.svg";
import "./../styles/Footer.css";


const Footer = () => {
  return (
    <div className="musicplayer">
     
        <article className="musicplayer-article">
             <img className="musicplayer-image" src ={picture}/>
            <div className="group-text">
              <text className ="song-name">Song Name</text>
              <text className="artist-name">Artist Name</text>
            </div>
            </article>
         <button className="music-button">
             <img className= "image-play"src={play}/>
         </button>
        
     
    </div>
  );
};

export default Footer;
