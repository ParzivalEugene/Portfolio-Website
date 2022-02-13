import React from 'react';
import ShapeAnimation from "../ShapeAnimation";

import "./Section404.scss"

const Section404 = () => {
  return (
    <div className="container-404">
      <div className="error-container-404">
        <h1>4</h1>
        <div className="torus-container-404">
          <ShapeAnimation shape="torus"/>
        </div>
        <h1>4</h1>
      </div>
      <p>Page not found</p>
    </div>
  );
};

export default Section404;