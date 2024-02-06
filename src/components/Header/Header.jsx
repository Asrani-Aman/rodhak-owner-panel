import React from "react";
import Logo from "../../assets/Armaan.png";
import Bars from "../../assets/bars.png";
import { useState, useEffect } from "react";
import Logo2 from "../../assets/rd.png";
import { Link, NavLink } from "react-router-dom";
import { FiAlignRight, FiXCircle, FiChevronDown, FiX } from "react-icons/fi";
import Serve from "../whoWeServe/serve";
import dnd from "../../assets/newDesign/Rodhak.png";

import "./Header.css";
const Header = () => {
  const Mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".header");
    navbar.classList.toggle("sticky", window.scrollY > 0);
  });

  ///drodoem menu item
  const [isMenu, setisMenu] = useState(false);
  const [isResponsiveclose, setResponsiveclose] = useState(false);
  const toggleClass = () => {
    setisMenu(isMenu === false ? true : false);

    setResponsiveclose(isResponsiveclose === false ? true : false);
  };

  const [isMenuSubMenu, setMenuSubMenu] = useState(false);
  const [isMenuSubMenu2, setMenuSubMenu2] = useState(false);
  const toggleSubmenu = () => {
    const Submenu = document.querySelector(".dropdown-menu");
    setMenuSubMenu(isMenuSubMenu === false ? true : false);

    Submenu.classList.toggle("dropdown");
  };
  const toggleSubmenu2 = () => {
    const Submenu2 = document.querySelector(".dropdown-menu-2");
    setMenuSubMenu2(isMenuSubMenu2 === false ? true : false);

    Submenu2.classList.toggle("dropdown");
  };

  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }
  return (
    <div className="header" id="header">
      <Link to="/">
        <img src={Logo2} className="logo" alt="logo" />
      </Link>
      {menuOpened === false && Mobile === true ? (
        <div onClick={() => setMenuOpened(true)}>
          <img
            src={Bars}
            alt="barsImg "
            style={{ width: "1.5rem", height: "1.5rem" }}
          ></img>
        </div>
      ) : (
        <>
          {Mobile && ( // Conditionally render the cross icon on mobile screens
            <div onClick={() => setMenuOpened(false)}>
              <FiX style={{ width: "1.5rem", height: "1.5rem" }} />
            </div>
          )}
          <ul className="header-menu">
            <li onClick={() => setMenuOpened(false)}>
              {" "}
              <Link to="/about" span="true" smooth="true">
                About us
              </Link>
            </li>
            <li onClick={() => setMenuOpened(false)}>
              <a href="#Plans" span="true" smooth="true">
                Our Products and Services
              </a>
            </li>
            <li onClick={() => setMenuOpened(false)}>
              <NavLink to="/blogs" span="true" smooth="true">
                Media
              </NavLink>
            </li>
            <li onClick={() => setMenuOpened(false)}>
              {" "}
              <NavLink to="/contact" span="true" smooth="true">
                Let's Talk
              </NavLink>
            </li>

            {/* <li onClick={() => setMenuOpened(false)}>
            <a href="#testimonials" span="true" smooth="true">
              Who we serve?
            </a>
          </li> */}

            {/* code for the dropdown menu */}

            <li
              onClick={toggleSubmenu}
              className="menu-item sub__menus__arrows"
            >
              <a href="#customers" span="true" smooth="true">
                Who we serve? <FiChevronDown />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="#customers"
                    span="true"
                    smooth="true"
                    onClick={toggleClass}
                    activeClassName="is-active"
                    className="dropdownMenuItemClassName"
                  >
                    Schools and University
                  </a>
                </li>
                <li>
                  <a
                    href="#customers"
                    span="true"
                    smooth="true"
                    onClick={toggleClass}
                    activeClassName="is-active"
                    className="dropdownMenuItemClassName"
                  >
                    Offices
                  </a>
                </li>
                <li>
                  <a
                    href="#customers"
                    span="true"
                    smooth="true"
                    onClick={toggleClass}
                    activeClassName="is-active"
                    className="dropdownMenuItemClassName"
                  >
                    Fleet Owners
                  </a>
                </li>
                <li>
                  <a
                    href="#customers"
                    span="true"
                    smooth="true"
                    onClick={toggleClass}
                    activeClassName="is-active"
                    className="dropdownMenuItemClassName"
                  >
                    Private Owners
                  </a>
                </li>
                <li>
                  <a
                    href="#customers"
                    span="true"
                    smooth="true"
                    onClick={toggleClass}
                    activeClassName="is-active"
                    className="dropdownMenuItemClassName"
                  >
                    Families
                  </a>
                </li>
                <li>
                  <a
                    href="#customers"
                    span="true"
                    smooth="true"
                    onClick={toggleClass}
                    activeClassName="is-active"
                    className="dropdownMenuItemClassName"
                  >
                    Taxi Unions
                  </a>
                </li>
              </ul>
            </li>

            {/* ///// */}
            <li onClick={toggleSubmenu2}>
              Login/Register
              <ul className="dropdown-menu-2">
                <li>
                  <a
                    href="https://owner-dnd-rodhak.onrender.com/"
                    span="true"
                    smooth="true"
                    onClick={toggleClass}
                    activeClassName="is-active"
                    className="dropdownMenuItemClassName"
                  >
                    Manage My Fleet
                  </a>
                </li>
                <li>
                  <a
                    href="http://195.35.45.35:3000/api/v1/driver/register"
                    span="true"
                    smooth="true"
                    onClick={toggleClass}
                    activeClassName="is-active"
                    className="dropdownMenuItemClassName"
                  >
                    Manage My Trip
                  </a>
                </li>
              </ul>
            </li>
            <li onClick={() => setMenuOpened(false)}>
              <NavLink to="/contact" span="true" smooth="true">
                Contact us
              </NavLink>
            </li>
            <li onClick={() => setMenuOpened(false)}>
              <img src={dnd} alt="dndlogo" className="dnd"></img>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Header;
