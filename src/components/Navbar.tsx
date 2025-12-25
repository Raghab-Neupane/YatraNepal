import React from "react";
import logo from "../assets/logo.png"; // update path if needed

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo">
        <img src={logo} alt="AI Lab Logo" />
        </div>
        <div>
          <ul className="Links">
            <li> <a href="#services">Services</a></li>
            <li> <a href="#our-product">Our Product</a></li>
            <li> <a href="#about-us">About Us</a></li>
            <li> <a href="#team">Team</a></li>
            <li> <a href="#contact-us">Contact Us</a></li>
          </ul>
        </div>
    </nav>
  );
};

export default Navbar;
