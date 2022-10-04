//project files
import React, { useState ,useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Card from './components/Card';
import data from './data/music.json';
import './styles/App.css';
import NavBar from './components/NavBar';
import logo from './assets/logo.png';
import home from "./assets/icons/home.svg";
import search from "./assets/icons/search.svg";
import Home from './components/Home';
import Search from './components/Search';


export default function App() {
  // local state
  const [song,setSong]= useState(data);
  const Cards = song.map((item) => (
    <Card
      key={item.id}
      title={item.title}
      genre={item.genre}
      artist={item.artist}
      album={item.album}
      pathToAlbum ={item.pathToAlbum}
      pathToMusic={item.pathToMusic}
    />
  ));

  useEffect(()=>{
   
    fetch('http://localhost:3000/data/music.json')
 .then (response => console.log(response.json(), 'hsdhsdhs'))
  // .then(setData)
 },[])

    return (
      <div className="App">
        <BrowserRouter>
        <NavBar />
        {Cards}
          <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/search" element={<Search />} />
          </Routes>
        </BrowserRouter>
      </div>

      //     <div className="App" >

      //    <nav className='nav' >
      //       <img className='logoSpotifoo' src ={logo}/>
      //       <button className='home' >
      //       <img className ='homeIcon' src ={home}/>
      //       <label> className='homelabel' >Home </label>
      //       </button>
      //        <button className ='search'>
      //         <img className='searchIcon' src ={search}/>
      //         <label className ='searchLabel'> Search </label>
      //        </button>
      // </nav>

      //    </div>
    );
}


