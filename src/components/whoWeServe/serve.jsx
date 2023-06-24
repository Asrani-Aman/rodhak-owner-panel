import React from "react";
import "./serve.css";

import Service1 from "../../assets/newDesign/School, Universities and Offices.png";
import Service5 from "../../assets/newDesign/Tours n Travels.png";
import Service2 from "../../assets/newDesign/Volvo, State RTCs.png";
import Service4 from "../../assets/newDesign/Households.png";
import Service3 from "../../assets/newDesign/Logistics, Trucks, Taxi Unions.png";

const Serve = () => {
  return (
    <>
      <div className="line"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">WHO</span>
        <span>WE</span>
        <span className="stroke-text">SERVE</span>
      </div>
      <div className="serve">
        <div className="service service-1">
          <img src={Service1} alt="service1"></img>
          <h4>Schools,Universities and Offices</h4>

          <p>
            Enhance safety with our innovative road solutions tailored for
            educational institutions and workplace environments.
          </p>
        </div>
        <div className="service service-2">
          <img src={Service2} alt="service1"></img>
          <h4>Schools,Universities and Offices</h4>

          <p>
            Enhance safety with our innovative road solutions tailored for
            educational institutions and workplace environments.
          </p>
        </div>
        <div className="service service-3">
          <img src={Service3} alt="service1"></img>
          <h4>Schools,Universities and Offices</h4>

          <p>
            Enhance safety with our innovative road solutions tailored for
            educational institutions and workplace environments.
          </p>
        </div>
        <div className="service service-4">
          <img src={Service4} alt="service1"></img>
          <h4>Schools,Universities and Offices</h4>

          <p>
            Enhance safety with our innovative road solutions tailored for
            educational institutions and workplace environments.
          </p>
        </div>
        <div className="service service-5">
          <img src={Service5} alt="service1"></img>
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

export default Serve;
