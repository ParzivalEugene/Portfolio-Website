import React from 'react';

import "./Hero.scss"
import ShapeAnimation from "../ShapeAnimation";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-info-container">
        <h1 className="hero-header">Michkov Eugene</h1>
        <div className="hero-paragraph-container">
          <p className="hero-paragraph">
            Digital Craftsman (Designer / Developer)
          </p>
          <p className="hero-paragraph">
            Founder of the <strong>INVINCIBLE WARRIORS COMPANY</strong> and the lead developer of
            <strong> Samurai Discord Bot</strong>
          </p>
          <p className="hero-paragraph">
            Chief Developer and media designer of <strong>Toro Constructor</strong>
          </p>
        </div>
      </div>
      <div className="hero-canvas-container">
        <ShapeAnimation shape={"torus-knot"}/>
      </div>
    </div>
  );
};

export default Hero;