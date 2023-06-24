import React from "react";
// import { Card } from "../../BlogSection/blog/Card";
import { Card } from "../../blog/Card";
// import { Category } from "../../BlogSection/category/Category";
import { Category } from "../../category/Category";
import "./Home.css";
import styled from "styled-components";
export const Home = () => {
  const Wrapper = styled.section`
    /* /////////for blog section */

    h1,
    h2 {
      font-weight: 600;
    }
    h3 {
      font-weight: 500;
    }
    a {
      font-size: 17px;
    }
    ul,
    li,
    a,
    button,
    input,
    textarea {
      border: none;
      background: none;
      outline: none;
      cursor: pointer;
      text-decoration: none;
      list-style-type: none;
    }
    ::placeholder {
      font-size: 17px;
    }
    .flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .flexCenter {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    p {
      color: #5a5a5a;
      font-size: 15px;
    }
    label {
      color: #999;
      font-size: 13px;
    }

    .button {
      background: #212121;
      border: 1px solid;
      border-color: #212121;
      border-radius: 6px;
      color: #fff;
      cursor: pointer;
      font-weight: 400;
      height: 48px;
      line-height: 1;
      padding: 15px 28px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 20px;
    }
    .grid3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 15px;
    }
    .container {
      max-width: 95%;
      margin: auto;
    }
    footer {
      padding: 10px;
    }
    footer .icon {
      font-size: 20px;
      margin-left: 10px;
    }
    @media screen and (max-width: 768px) {
      .grid3,
      .grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    .link {
      color: #000;
    }
  `;

  return (
    <Wrapper>
      {/*  <Slider />*/}
      <Category />
      <Card />
    </Wrapper>
  );
};
