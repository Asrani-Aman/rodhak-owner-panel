import React from "react";
import "./serve.css";

import Service1 from "../../assets/newDesign/School, Universities and Offices.png";
import Service5 from "../../assets/newDesign/Tours n Travels.png";
import Service2 from "../../assets/newDesign/Volvo, State RTCs.png";
import Service4 from "../../assets/newDesign/Households.png";
import Service3 from "../../assets/newDesign/Logistics, Trucks, Taxi Unions.png";

const Serve = () => {
  return (
    <div id="customers">
      <div className="line"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span>WHO WE SERVE</span>
      </div>
      <div className="serve">
        <div className="service service-1">
          <img src={Service1} alt="service1"></img>
          <h4 style={{ marginBottom: "-10px" }}>
            SCHOOLS, UNIVERSITIES AND OFFICES
          </h4>
          <p>
            Enhance safety with our innovative road solutions tailored for
            educational institutions and workplace environments.
          </p>
        </div>
        <div className="service service-2">
          <img
            src={Service2}
            alt="service2"
            style={{ marginBottom: "-50px" }}
          ></img>
          <h4 style={{ marginBottom: "-10px" }}>BUS OWNERS, STATE RTCs</h4>
          <p>
            Optimize fleet management and ensure passenger safety through our
            advanced tracking and accident prevention technologies.
          </p>
        </div>
        <div className="service service-3">
          <img
            src={Service3}
            alt="service3"
            style={{ marginBottom: "-40px" }}
          ></img>
          <h4 style={{ marginBottom: "-10px" }}>
            TRUCK, TAXI UNIONS, LOGISTICS OPERATORS{" "}
          </h4>
          <p>
            Boost operational efficiency, minimize accidents, and improve driver
            safety with our state-of-the-art solutions designed for the
            transportation industry.
          </p>
        </div>
        <div className="service service-4">
          <img
            src={Service4}
            alt="service4"
            style={{ marginBottom: "-30px" }}
          ></img>
          <h4 style={{ marginBottom: "-10px" }}>HOUSEHOLDS</h4>
          <p>
            Keep your family safe on the road with our range of products,
            including tracking systems and advanced safety features.
          </p>
        </div>
        <div className="service service-5">
          <img
            src={Service5}
            alt="service5"
            style={{ marginBottom: "-40px" }}
          ></img>
          <h4 style={{ marginBottom: "-10px" }}>TOUR N TRAVEL OPERATORS</h4>
          <p>
            Enhance customer satisfaction and ensure a secure journey with our
            road safety solutions tailored for the tourism and travel industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Serve;
