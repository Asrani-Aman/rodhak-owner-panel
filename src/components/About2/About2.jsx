import React from "react";
import "./About2.css";
import aboutusimg from "../../assets/newDesign/Home_Car_Image-removebg-preview-2.png";
export const About2 = () => {
  return (
    <div>
      <section id="about-section">
        <div class="about-left">
          <img src={aboutusimg} alt="About Img" className="about2img" />
        </div>

        <div class="about-right">
          <h4>D'N'D Rodhak</h4>
          <h1>About Us</h1>
          <p>
            D'n'D Rodhak Is A Dynamic Tech Startup Founded On August 15th, 2019,
            At IIT Mandi, Himachal Pradesh. We Are Proud To Have Been
            Shortlisted In The Top 25 Startups At Hill StartUp Trek 2019,
            Organized By IIT Mandi Catalyst. This Recognition Earned Us The
            Opportunity To Be Funded While Participating In The Exploration
            Program, Fueling Our Passion For Innovation And Road Safety
            Solutions. Our Commitment To Excellence Has Been Acknowledged By
            Esteemed Organizations Such As DST (Department Of Science And
            Technology) And HPCED (Himachal Pradesh Centre For Entrepreneurship
            Development). Through Their Support, We Have Received Sustenance
            Allowance For An Entire Year, Allowing Us To Focus On Refining Our
            Products And Creating A Lasting Impact On Road Safety.At D'n'D
            Rodhak, We Have Showcased Our Technical Prowess And Industry
            Expertise By Presenting A Technical Manuscript At The International
            Conference On Computing, Communications, And Networking Technologies
            2020, Held At IIT Kharagpur. This Platform Has Further Validated Our
            Dedication To Pushing The Boundaries Of Cutting-Edge Technologies
            Such As Internet Of Things (IoT), Machine Learning, And
            5G.Recognition For Our Innovative Solutions Extends Beyond The Local
            Level. We Are Proud To Have Been Shortlisted In The Top 100 Startups
            At The National Level 5G Hackathon, Where We Were Granted The
            Opportunity To Refine Our Products. This Acknowledgment Motivates Us
            To Continue Our Pursuit Of Excellence And Contribute To
            Revolutionizing Road Safety.Our Mission At D'n'D Rodhak Is Simple
            Yet Profound: Your Safety, Our Responsibility! We Are Based In The
            Picturesque Town Of Mandi, Himachal Pradesh, Where Our Dedicated
            Team Of Founders And Professionals Work Tirelessly To Develop
            State-Of-The-Art Road Safety Solutions.
          </p>
          <br />
          <div class="address">
            <ul>
              <li>
                <span class="address-logo">
                  <i class="fas fa-paper-plane"></i>
                </span>
                <b>
                  <p>Founders</p>{" "}
                </b>
                <span class="saprater">:</span>
                <p> Pranay Sharma - Naveksha Sood</p>
              </li>

              <li>
                <span class="address-logo">
                  <i class="far fa-envelope"></i>
                </span>
                <b>
                  <p>Email ID</p>{" "}
                </b>
                <span class="saprater"> : </span>
                <p>dnd2rodhak@gmail.com</p>
              </li>
            </ul>
          </div>
          {/* <div class="expertise">
            <h3>My Expertise</h3>
            <ul>
              <li>
                <span class="expertise-logo">
                  <i class="fab fa-html5"></i>
                </span>
                <p>HTML</p>
              </li>
              <li>
                <span class="expertise-logo">
                  <i class="fab fa-css3-alt"></i>
                </span>
                <p>CSS</p>
              </li>
              <li>
                <span class="expertise-logo">
                  <i class="fab fa-node-js"></i>
                </span>
                <p>Java Script</p>
              </li>
              <li>
                <span class="expertise-logo">
                  <i class="fab fa-react"></i>
                </span>
                <p>React Js</p>
              </li>
            </ul>
          </div> */}
        </div>
      </section>
    </div>
  );
};
export default About2;
