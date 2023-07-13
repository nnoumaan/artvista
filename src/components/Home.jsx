import React from "react";
import {BsArrowRight} from 'react-icons/bs'
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeText">
        <h1>Art Vista</h1>
        <h3> Welcome To Virtual Art Gallery</h3>
        <br />
        <p>
          We house an impressive selection of fine art to cater to different
          sensibilities and tastes. Discover our extensive fine art collection
          by browising through our different collections below.
        </p>
        <br />
        <br />

        <div id="btnContainer"><NavLink to={'/gallery'}><button id="btn">Explore  <BsArrowRight id="bsArrow"/></button></NavLink></div>
      </div>
      
      <div className="homeImg"></div>
    </div>
  );
};

export default Home;
