import React from "react";
import "./blog.css";
import { blog } from "../../../assets/data/data.jsx";
import {
  AiOutlineTags,
  AiOutlineClockCircle,
  AiOutlineComment,
  AiOutlineShareAlt,
} from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

export const Card = () => {
  return (
    <>
      <section className="blog">
        <div className="container grids">
          {blog.map((item) => (
            <div className="box boxItems" key={item.id}>
              <div className="img">
                <img src={item.cover} alt="" />
              </div>
              <div className="details">
                <div className="tag">
                  <AiOutlineTags className="icon" />
                  <Link to={`/details/${item.id}`}>#{item.category}</Link>
                </div>
                <Link to={`/details/${item.id}`} className="link">
                  <h3 className="blog-title stroke-text">{item.title}</h3>
                </Link>
                <p className="blog-card-para">{item.desc.slice(0, 180)}...</p>
                <div className="date">
                  <AiOutlineClockCircle className="icon" />{" "}
                  <label htmlFor="">{item.date}</label>
                  <AiOutlineComment className="icon" />{" "}
                  <label htmlFor="">27</label>
                  <AiOutlineShareAlt className="icon" />{" "}
                  <label htmlFor="">SHARE</label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
