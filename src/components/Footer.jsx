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
        <NavLink color="white" id="">
          <AiOutlineInstagram className="footerIcons" />
        </NavLink>
        <NavLink>
          <AiOutlineTwitter className="footerIcons" />
        </NavLink>
        <NavLink to={"https://www.facebook.com/"} target="_blank">
          <AiOutlineFacebook className="footerIcons" />
        </NavLink>
      </div>
    </div>
  );
};

export default Footer;
