import React from 'react';

import {DisplaySizes, links} from "../../data/data"


import {FaAt, FaInstagram, FaReact, FaTelegramPlane} from "react-icons/fa";
import {SiThreedotjs} from "react-icons/si"

import "./Footer.scss"
import useWindowDimensions from "../WindowDimensions";
import {BsDownload} from "react-icons/bs";

const Footer = () => {
  const {height, width} = useWindowDimensions();

  if (width > DisplaySizes.tablet) {
    return (
      <div className="footer-container">
        <p className="footer-coded-by">
          coded with <FaReact/> and <SiThreedotjs/> by <a
          className="footer-coded-by-link"
          href={links.github_profile}
          target="_blank"
          rel="noreferrer"
        >ParzivalEugene</a>
        </p>
        <p className="footer-copyright">© 2023 Michkov Eugene. All Rights Reserved.</p>
        <div className="footer-social-icons-container">
          <a
            className="footer-social-icon-container"
            href={links.instagram_profile}
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="footer-social-icon"/>
          </a>
          <a
            className="footer-social-icon-container"
            href={links.telegram}
            target="_blank"
            rel="noreferrer"
          >
            <FaTelegramPlane className="footer-social-icon"/>
          </a>
          <a
            className="footer-social-icon-container"
            href={links.email}
          >
            <FaAt className="footer-social-icon"/>
          </a>
        </div>
      </div>
    );
  } else if (width > DisplaySizes.mobile) {
    return (
      <div className="footer-container__tablet">
        <div className="footer-container__sub_tablet">
          <p className="footer-coded-by">
            coded with <FaReact/> and <SiThreedotjs/> by <a
            className="footer-coded-by-link"
            href={links.github_profile}
            target="_blank"
            rel="noreferrer"
          >ParzivalEugene</a>
          </p>
          <div className="footer-social-icons-container">
            <a
              className="footer-social-icon-container"
              href={links.instagram_profile}
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="footer-social-icon"/>
            </a>
            <a
              className="footer-social-icon-container"
              href={links.telegram}
              target="_blank"
              rel="noreferrer"
            >
              <FaTelegramPlane className="footer-social-icon"/>
            </a>
            <a
              className="footer-social-icon-container"
              href={links.email}
            >
              <FaAt className="footer-social-icon"/>
            </a>
          </div>
        </div>
        <p className="footer-copyright">© 2022 Michkov Eugene. All Rights Reserved.</p>
      </div>
    )
  } else {
    return (
      <div className="footer-container">
        <p className="footer-coded-by">
          coded with <FaReact/> and <SiThreedotjs/> by <a
          className="footer-coded-by-link"
          href={links.github_profile}
          target="_blank"
          rel="noreferrer"
        >ParzivalEugene</a>
        </p>
        <div className="footer-social-icons-container__mobile">
          <div className="footer-social-icons-container">
            <a
              className="footer-social-icon-container"
              href={links.instagram_profile}
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="footer-social-icon"/>
            </a>
            <a
              className="footer-social-icon-container"
              href={links.telegram}
              target="_blank"
              rel="noreferrer"
            >
              <FaTelegramPlane className="footer-social-icon"/>
            </a>
            <a
              className="footer-social-icon-container"
              href={links.email}
            >
              <FaAt className="footer-social-icon"/>
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
        <p className="footer-copyright">© 2022 Michkov Eugene. All Rights Reserved.</p>
      </div>
    )
  }
};

export default Footer;
