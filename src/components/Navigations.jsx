import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";

const Navigations = () => {
  return (
    <nav>
      <div className="logoContainer">
        <NavLink className="logo" to={'/'}>Art Vista</NavLink>
      </div>
      <div className="navLinks">
        {" "}
        <NavLink className="customNav" to={"/"}>
          Home
        </NavLink>
        <NavLink className="customNav" to={"/artist"}>
          Artist
        </NavLink>
        <NavLink className="customNav" to={"/gallery"}>
          Gallery
        </NavLink>
        <NavLink className="customNav" to={"/contact"}>
          Contact Us
        </NavLink>
      </div>
      <div id="search">
        <input type="text" placeholder="Search..." />
        <AiOutlineSearch id="searchicon" color="white" pos="absolute" />
      </div>
    </nav>
  );
};

export default Navigations;
