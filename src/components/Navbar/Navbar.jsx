import React, { useState } from "react";
import "./navbar.css";
import { MdTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
const Navbar = () => {
  const [active, setActive] = useState("navBar");

  const showNav = () => {
    setActive("navBar activeNavbar");
  };

  const removeNav = () => {
    setActive("navBar");
  };

  return (
    <section className="navBarSection">
      <div className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1>
              <MdTravelExplore className="icon" />
              Travel.
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navList flex">
            <li className="navItem">
              <a href="#home" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="#packages" className="navLink">
                Packages
              </a>
            </li>

            <li className="navItem">
              <a href="#shop" className="navLink">
                Shop
              </a>
            </li>

            <li className="navItem">
              <a href="#about" className="navLink">
                About
              </a>
            </li>

            <li className="navItem">
              <a href="#pages" className="navLink">
                Pages
              </a>
            </li>
            <button className="btn">
              <a href="#">BOOK NOW</a>
            </button>
          </ul>
          <div onClick={removeNav} className="closeNavBar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>

        <div onClick={showNav} className="toggleNavBar">
          <CgMenuGridR className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
