//project files
import React, { useState ,useEffect } from 'react';
import Card from './components/Card';
import data from './data/music.json';
import './styles/App.css';
import NavBar from './components/NavBar';


export default function App() {
  // local state
  const [data,setData]= useState();
  

 
  //useEffect(()=>{
   
    //fetch('http://localhost:8080/music/')
 // .then (response => response.json())
  //.then(setData)
 // },[])

    return (
      <div className="App" >
     <NavBar/>
     
     </div>
      
  );
}


