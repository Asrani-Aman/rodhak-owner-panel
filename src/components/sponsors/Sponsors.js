import React from "react";
import "./Sponsors.css";

import Sponsor1 from "../../assets/newDesign/startup/DOT_Sponsor.png";
import Sponsor2 from "../../assets/newDesign/startup/DST.png";
import Sponsor3 from "../../assets/newDesign/startup/StartUp Himachal.png";

const Sponsors = () => {
  return (
    <div className="sponsors-container">
      <div className="line"></div>
      <div className="programs-header">
        <span>OUR Sponsors</span>
      </div>
      <div className="sponsors">
        <div className="sponsor">
          <img src={Sponsor1} alt="Dept of Telecom"></img>
          <h4>Dept of Telecom</h4>
        </div>
        <div className="sponsor">
          <img src={Sponsor2} alt="DST- Nidhi Prayas"></img>
          <h4>DST- Nidhi Prayas</h4>
        </div>
        <div className="sponsor">
          <img src={Sponsor3} alt="Startup Himachal"></img>
          <h4>Startup Himachal</h4>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
