import React from 'react';

import {links} from "../../data/data"


import {FaAt, FaInstagram, FaReact, FaTelegramPlane} from "react-icons/fa";
import {SiThreedotjs} from "react-icons/si"

import "./Footer.scss"

const Footer = () => {
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
      <p className="footer-copyright">© 2022 Michkov Eugene. All Rights Reserved.</p>
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
};

export default Footer;