import logo from "./../assets/logo.png";
import home from "./../assets/icons/home.svg";
import search from "./../assets/icons/search.svg";
import React from "react";
import { Link } from "react-router-dom";
import "./../styles/NavBar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <img className="logoSpotifoo" src={logo} />
      <Link to="/">
      <button className="home">
        <img className="homeIcon" src={home} />
        <label className="home-label"> Home </label>
      </button>
      </Link>
      <Link to ="/Search">
      <button className="search" >
        <img className="searchIcon" src={search} />
        <label className="searchLabel"> Search </label>
      </button>
      </Link>
    </nav>
  );
};
export default Navbar;
