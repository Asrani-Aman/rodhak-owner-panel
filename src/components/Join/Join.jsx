// Join.jsx
import React, { useRef } from "react";
import "./Join.css";
import { Link } from "react-router-dom";

const Join = () => {
  const form = useRef();

  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span>Contact Us</span>
        </div>
        <div>
          <span>For Any Queries</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container">
          <Link to="/contact" className="btn btn-join">
            Click Here to contact us
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Join;
