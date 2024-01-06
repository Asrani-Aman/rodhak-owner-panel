import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import "./hero.css";
import { motion } from "framer-motion";

import Dadu from "../../assets/newDesign/Dadu.png";
import Driving from "../../assets/newDesign/Home_Car_Image-removebg-preview-2.png";
import Bustop from "../../assets/newDesign/Enhance_safety_with_our_innovative_road_solutions_tailored_for_educational_institutions_and_workplace_environments.-removebg-preview.png";

const Hero = () => {
  const transition = { type: "spring", duration: 2.5 };
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Header />
      <div className="hero" id="hero">
        <div className="left-h">
          <motion.div className="hero-left-img">
            <motion.img
              initial={{ left: isMobile ? "20px" : "380px", bottom: "0px" }}
              whileInView={{ left: isMobile ? "20px" : "100px" }}
              transition={{ ...transition, type: "tween" }}
              className="hero-img"
              src={Dadu}
              alt="Dadu Image"
            ></motion.img>
          </motion.div>
        </div>
        <div className="right-h">
          <div className="right-2">
            <span className=" right-2-text1">Driving Convenience</span>
            <span className="right-2-text1"> Ensuring Safety</span>
          </div>
          <div className="right-2b">
            <span className="right-des">
              Enhance public transport convenience, optimize fleet management,
              and promote road safety with driver-friendly products.
            </span>
          </div>
          <div className="right-3">
            <button className="hero-btn hero-btn-1">
              <a href="https://www.dndrodhak.live/">Track My Bus </a>
            </button>
            <button className="hero-btn hero-btn-2">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSehlDgfrZ9R4vFCL7srkRkBD_L-i-pq7R9pSx3QdRDRXsmRxg/viewform">
                Buy Now
              </a>
            </button>
          </div>
          <div className="right-4">
            <div>
              <img src={Driving} alt="Driving Image" />
            </div>
            <div>
              <img src={Bustop} alt="Bustop Image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
