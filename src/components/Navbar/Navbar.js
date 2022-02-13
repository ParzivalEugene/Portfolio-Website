import React from 'react';
import {Link} from "react-router-dom";

import {links} from "../../data/data";

import {BsDownload} from "react-icons/bs";

import "./Navbar.scss"

const Navbar = (props) => {
  return (
    <div className="footer-container">
      <Link
        className="navbar-logo"
        to="/"
      >
        Michkov Eugene
      </Link>
      <div className="navbar-tabs">
        <Link
          className={props.active_tab === "about" ? "navbar-link__active" : "navbar-link"}
          to="/about"
        >
          About
        </Link>
        <Link
          className={props.active_tab === "projects" ? "navbar-link__active" : "navbar-link"}
          to="/projects"
        >
          Projects
        </Link>
        <a
          className="navbar-link"
          href={links.linktree}
        >
          Socials
        </a>
      </div>
      <a
        className="navbar-button"
        href={"/media/cv.pdf"}
        target="_blank"
        rel="noreferrer"
        download
      >
        Download CV
        <BsDownload className="navbar-button-icon"/>
      </a>
    </div>
  );
};

export default Navbar;