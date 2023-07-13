import React from "react";
import { NavLink } from "react-router-dom";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footContainer">
      <div className="fIconsContainer">
        <NavLink to={'https://www.instagram.com/'} target="blank">
          <AiOutlineInstagram className="footerIcons" />
        </NavLink>
        <NavLink to={'https://twitter.com/home'} target="blank">
          <AiOutlineTwitter className="footerIcons" />
        </NavLink>
        <NavLink to={"https://www.facebook.com/"} target="blank">
          <AiOutlineFacebook className="footerIcons" />
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
