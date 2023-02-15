import React from "react";
import "../component/NavBar.css"
import logo from "../assests/logo.png";


const NavBar = () => {
  return (
    <header>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="Company Logo" />
            <p className="logofont">H4U</p>
          </div>
          <div>
            <nav>
              <ul>
                <li>
                  <a activeClass="active" smooth spy href="#">Home</a>
                </li>
                <li>
                  <a activeClass="active" smooth spy href="#features">Features</a>
                </li>
                <li>
                  <a activeClass="active" smooth spy href="#about">About</a>
                </li>
                <li>
                  <a activeClass="active" smooth spy href="#faqs">FAQs</a>
                </li>
                <li>
                  <a activeClass="active" smooth spy href="#pricing">Pricing</a>
                </li>
              </ul>
            </nav>
          </div>
          <div >
            <button className="contact">
              <a href="#contact">Contact</a>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
