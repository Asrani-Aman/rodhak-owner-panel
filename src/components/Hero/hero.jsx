import React from "react";
import Header from "../Header/Header";
import "./hero.css";
import TrackingIcon from "../../assets/TrackingIcon.png";
import Logo from "../../assets/Armaan.png";
import HeroImageBack from "../../assets/hero_image_back.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
import LOGO2 from "../../assets/08.png";
// for the nwe design

import dnd from "../../assets/newDesign/Rodhak.png";
import Dadu from "../../assets/newDesign/Dadu.png";
import HomeImg from "../../assets/newDesign/Home-2.png";
import Bustop from "../../assets/newDesign/Enhance_safety_with_our_innovative_road_solutions_tailored_for_educational_institutions_and_workplace_environments.-removebg-preview.png";

import Driving from "../../assets/newDesign/Home_Car_Image-removebg-preview-2.png";

const Hero = () => {
  const transition = { type: "spring", duration: 2.5 };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    //////// new-design

    <>
      <Header />
      <div className="hero" id="hero">
        {/* <img className="hero-img" src={HomeImg}></img> */}

        <div className="left-h">
          <motion.div className="hero-left-img">
            <motion.img
              initial={{ left: mobile ? "100px" : "350px" }}
              whileInView={{ left: "100px" }}
              transition={{ ...transition, type: "tween" }}
              className="hero-img"
              src={Dadu}
            ></motion.img>
          </motion.div>
        </div>
        <div className="right-h">
          <div className="right-1">
            <img className="hero-img-right" src={dnd}></img>
          </div>
          <div className="right-2">
            <span className="stroke-text right-2-text1">
              {" "}
              Driving Convenience
            </span>
            <span className="right-2-text1"> Ensuring Safety</span>
          </div>
          <div className="right-3">
            <button className="hero-btn hero-btn-1">
              <a href="https://www.dndrodhak.live/">Track My Bus </a>
            </button>
            <button className="hero-btn hero-btn-1">
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSehlDgfrZ9R4vFCL7srkRkBD_L-i-pq7R9pSx3QdRDRXsmRxg/viewform">
                Buy Now
              </a>
            </button>
          </div>
          <div className="right-4">
            <div>
              {" "}
              <img src={Driving}></img>
            </div>
            <div>
              {" "}
              <img src={Bustop}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
