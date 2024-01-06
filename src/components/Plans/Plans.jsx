import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import WhiteTick from "../../assets/whiteTick.png";
import { ImCross } from "react-icons/im";
const Plans = () => {
  return (
    <>
      <div className="line"></div>
      <div className="Plans" id="Plans">
        <div className="plans-container">
          <div className="programs-header" style={{ gap: "2rem" }}>
            <span>CHOOSE A PRODUCT THAT SUITS YOUR BUSINESS NEEDS </span>
          </div>

          {/* Plans Cards */}
          <div className="plans">
            {plansData.map((plan, i) => (
              <div className="plan" key={i}>
                {plan.icon}
                <span>{plan.description}</span>
                <span>{plan.name}</span>
                <hr />
                <span>{plan.price}</span>
                <div className="features">
                  {plan.features.map((feature, i) => (
                    <div className="feature" key={i}>
                      {feature.tick ? (
                        <img src={WhiteTick} alt="tick-img" />
                      ) : (
                        <ImCross />
                      )}
                      <span key={i}>{feature.facility}</span>
                    </div>
                  ))}
                </div>

                <button className="btn">
                  <a href={plan.link2}>{plan.link} </a>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
