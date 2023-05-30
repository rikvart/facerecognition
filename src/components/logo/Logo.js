import React from "react";
import Tilt from "react-parallax-tilt";
import brain from "./brain.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt">
        <div className="Tilt-inner" style={{display: 'flex', height: '300px', width: '300px'}}>
          <img src={brain} className="Tilt-inner" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
