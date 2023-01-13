import React, { useState } from "react";
import "./navbar.css";
import {
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>R</span>ahuL
            <span>S</span>aINI
          </h2>
        </div>

        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.instagram.com/mr.meetawa//"
                target="_Rahu">
                <FaInstagram className="instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/rahulmeetawa"
                target="_Rahu">
                <FaGithub className="github" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rahul-saini-3950501a2/"
                target="_Rahu">
                <FaLinkedinIn className="Linkedin" />
              </a>
            </li>
          </ul>
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
