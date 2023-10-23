import { Fragment } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/hero";
import Join from "./components/Join/Join";
import Program from "./components/Programs/Program";
import Reason from "./components/Reasons/Reason";
import Testimonial from "./components/Testimonials/Testimonial";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import { Home } from "./components/BlogSection/pages/home/Home";
import { DetailsPages } from "./components/BlogSection/pages/details/DetailsPages.jsx";
import Plans from "./components/Plans/Plans";
import Serve from "./components/whoWeServe/serve";
import Sponsors from "./components/sponsors/Sponsors";
import About from "./components/Aboutus/About";
import { useState, useEffect } from "react";
import React from "react";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

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
                  <Program />
                  <Sponsors />
                  <Serve />
                  <Reason />
                  <Plans />
                  <Join />
                  <Footer />
                </Fragment>
              }
            />
            <Route
              path="/blogs"
              element={
                <Fragment>
                  <Header />
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
                  <Header />
                  <DetailsPages />
                  <Footer />
                </Fragment>
              }
            />
            <Route
              path="/contact"
              element={
                <Fragment>
                  <Header className="contact-header" />
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
