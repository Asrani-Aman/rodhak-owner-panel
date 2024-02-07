import { Fragment } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import Hero from "./components/Hero/hero.jsx";
import Join from "./components/Join/Join.jsx";
import Program from "./components/Programs/Program.jsx";
import Reason from "./components/Reasons/Reason.jsx";
import Testimonial from "./components/Testimonials/Testimonial.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact.js";
import Header from "./components/Header/Header.jsx";
import Header2 from "./components/Header2/Header.jsx";
import { Home } from "./components/BlogSection/pages/home/Home.jsx";
import { DetailsPages } from "./components/BlogSection/pages/details/DetailsPages.jsx";
import Plans from "./components/Plans/Plans.jsx";
import Serve from "./components/whoWeServe/serve.jsx";
import Sponsors from "./components/sponsors/Sponsors.js";
import About from "./components/Aboutus/About.jsx";
import { useState, useEffect } from "react";
import React from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader.js";
import About2 from "./components/About2/About2.jsx";

const override: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  borderColor: "#fff",
  zIndex: "9999",
};
function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      console.log("test");
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="loaders">
          <ClimbingBoxLoader
            color={"#f48915"}
            loading={loading}
            size={25}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Fragment>
                  <Hero />
                  <About />
                  {/* <Program /> */}

                  <Serve />
                  <Plans />
                  <Reason />

                  <Join />
                  <Sponsors />
                  <Footer />
                </Fragment>
              }
            />
            <Route
              path="/about"
              element={
                <Fragment>
                  <Header2 />
                  <About2 />
                  <Footer />
                </Fragment>
              }
            />
            <Route
              path="/blogs"
              element={
                <Fragment>
                  <Header2 />
                  <Home />
                  <Footer />
                  {/* <Hero />
                <Program />
                <Reason />
                <Join />
                <Footer /> */}
                </Fragment>
              }
            />
            <Route
              exact
              path="/details/:id"
              element={
                <Fragment>
                  <Header2 />
                  <DetailsPages />
                  <Footer />
                </Fragment>
              }
            />
            <Route
              path="/contact"
              element={
                <Fragment>
                  <Header2 className="contact-header" />
                  <Contact />
                  <Footer />
                </Fragment>
              }
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
