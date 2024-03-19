import React from "react";
import logo from "../assets/logof.png";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <nav className="header">
     
       <div className="nav-left">
       <img src={logo} alt="" />
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/tvshows">Movies</Link>
        <Link to="/tvshows">Recently Added</Link>
        <Link to="/tvshows">My List</Link>
       </div>
        <BsSearch  />
   
    </nav>
  );
};

export default Header;
