import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
// import Instagram from "../../assets/instagram.png";
// import Github from "../../assets/github.png";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

// import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/Armaan.png";
import LOGO from "../../assets/08.png";
const Footer = () => {
  return (
    <div className="footer-container" id="footer">
      <hr />
      <div className="footer">
        <div className="social-links">
          {/* <img src={Github} alt="githubImg"></img>
           */}
          <a href="https://www.facebook.com/dndrodhak/">
            <BsFacebook />
          </a>
          <a href="https://www.instagram.com/dndrodhak/">
            <AiFillInstagram />
          </a>
          <a href="https://www.linkedin.com/company/dndrodhak/">
            <FaLinkedinIn />
          </a>
          {/* <img src={LinkedIn} alt="LinkedInImg"></img>
          <Link href="https://www.instagram.com/dndrodhak/">
            <img src={Instagram} alt="InstagramImg"></img>
          </Link> */}
        </div>
        <div className="logo-f">
          <img src={LOGO} alt="LogoImg"></img>
        </div>
      </div>

      <div className="blur footer-blur-1"></div>
      <div className="blur footer-blur-2"></div>
    </div>
  );
};

export default Footer;
