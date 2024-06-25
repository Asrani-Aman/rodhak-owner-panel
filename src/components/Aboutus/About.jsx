import React from "react";
import AboutImg from "../../assets/newDesign/Track My Bus.png";
import AboutImgMOBILE from "../../assets/newDesign/Screenshot 2023-06-23 at 9.13.57 PM.png";

import "./About.css";
const About = () => {
  return (
    <div className="aboutus">
      <img src={AboutImg} className="aboutusimg" alt="aboutus-img" />
      <img src={AboutImgMOBILE} className="aboutimgmobile" alt="aboutus-img" />
      <a className="about-btn" href="https://www.live.himraahi.in/">
        TRACK MY BUS
      </a>
    </div>
  );
};

export default About;
