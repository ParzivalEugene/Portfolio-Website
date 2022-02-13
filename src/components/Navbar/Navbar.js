import React from 'react';
import {Link} from "react-router-dom";
import useWindowDimensions from "../WindowDimensions";
import {DisplaySizes, links} from "../../data/data";
import {BsDownload} from "react-icons/bs";

import "./Navbar.scss"

const Navbar = (props) => {
  const {height, width} = useWindowDimensions();
  if (width > DisplaySizes.tablet) {
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
  } else if (width > DisplaySizes.mobile) {
    return (
      <nav className="navbar-container">
        <div className="navbar-header">
          <Link
            className="navbar-logo"
            to="/"
          >
            Michkov Eugene
          </Link>
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
      </nav>
    )
  } else {
    return (
      <nav className="navbar-container">
        <div className="navbar-header">
          <Link
            className="navbar-logo"
            to="/"
          >
            Michkov Eugene
          </Link>
        </div>
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
      </nav>
    )
  }
};

export default Navbar;