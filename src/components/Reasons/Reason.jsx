import React from "react";
import "./Reason.css";
import ReasonImg from "../../assets/6334182-removebg-preview.png";
import Tick from "../../assets/tick.png";
const Reason = () => {
  return (
    <>
      <div className="line"></div>
      <div className="Reasons" id="reasons">
        <div className="left-r">
          {/* <img src={ReasonImg1} alt="resaon-img-1"></img>
        <img src={ReasonImg3} alt="resaon-img-1"></img>
        <img src={ReasonImg2} alt="resaon-img-1"></img>
        <img src={ReasonImg2} alt="resaon-img-1"></img> */}
          <img src={ReasonImg} alt="resaon-img-1" />
        </div>
        <div className="right-r">
          <span>some reasons</span>
          <div>
            <span className="stroke-text ">why</span>
            <span>Choose us?</span>
          </div>
          <div className="solutions">
            <p className="reasons-para">
              We offer solutions to major road safety concerns by leveraging
              state-of-the-art electronics and Al technology to reduce accidents
              due to human negligence. We envision a revolution in the road
              transport sector with a Rodhak (&quot;Maahi&quot;) deployed in all
              public and private transport vehicles assisting and monitoring the
              driver throughout his journey.
            </p>
            <hr />
          </div>
          <div className="details-r">
            <div>
              <img src={Tick} alt="tickImg"></img>
              <span>
                Fleet Management:
                <p className="reasons-para">
                  Using our technology, you can control costs, reduce waste,
                  optimize vehicle usage, improve driver safety, and ensure
                  vehicle protection against theft.
                </p>
              </span>
            </div>
            <div>
              <img src={Tick} alt="tickImg"></img>

              <span>
                Real-time Vehicle Tracking:
                <p className="reasons-para">
                  Track your vehicle in real-time anytime, literally from
                  anywhere
                </p>
              </span>
            </div>
            <div>
              <img src={Tick} alt="tickImg"></img>

              <span>
                Driver Assisting and Monitoring:
                <p className="reasons-para">
                  We alert the driver to pull over by observing symptoms of
                  fatigue with a fatique detection mechanism
                </p>
              </span>
            </div>
            <div>
              <img src={Tick} alt="tickImg"></img>

              <span>
                Driver Profiling:
                <p className="reasons-para">
                  Why should pilots have all the fun? Get a driving score to
                  showcase your driving skills
                </p>
              </span>
            </div>
            <div>
              <img src={Tick} alt="tickImg"></img>

              <span>
                Sobriety Checks:
                <p className="reasons-para">
                  Gaadi tera bhai chalayega? Chalayega, lekin pi ke nahi chala
                  payega! We notify about sobriety condition of driver with a
                  possibility to prevent the vehicle from startings
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reason;
