import React from "react";
import "./Sponsors.css";

import Sponsor1 from "../../assets/newDesign/startup/DOT_Sponsor.png";
import Sponsor2 from "../../assets/newDesign/startup/DST.png";
import Sponsor3 from "../../assets/newDesign/startup/StartUp Himachal.png";

const Sponsors = () => {
  return (
    <>
      <div className="line"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">OUR</span>
        <span>Sponsors</span>
        {/* <span className="stroke-text">NOW WITH US</span> */}
      </div>
      <div className="sponsors">
        <div className="service service-1">
          <img src={Sponsor1} alt="service1"></img>
          <h4>Schools,Universities and Offices</h4>

          <p>
            Enhance safety with our innovative road solutions tailored for
            educational institutions and workplace environments.
          </p>
        </div>
        <div className="service service-2">
          <img src={Sponsor2} alt="service1"></img>
          <h4>Schools,Universities and Offices</h4>

          <p>
            Enhance safety with our innovative road solutions tailored for
            educational institutions and workplace environments.
          </p>
        </div>
        <div className="service service-3">
          <img src={Sponsor3} alt="service1"></img>
          <h4>Schools,Universities and Offices</h4>

          <p>
            Enhance safety with our innovative road solutions tailored for
            educational institutions and workplace environments.
          </p>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
