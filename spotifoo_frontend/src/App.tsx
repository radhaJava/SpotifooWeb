//project files

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Search from "./components/Search";
import Footer from "./components/Footer";

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer /> 
      </BrowserRouter>
    </div>
     );
}
