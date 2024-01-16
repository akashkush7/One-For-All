import React from 'react';
import { NavLink } from 'react-router-dom';
import "./NavBar.css";
import Logo from "../Images/favicon.ico";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
      <div className="container-fluid">
        <div>
          <img src={Logo} alt="SiteLogo" style={{ maxHeight: "25px" }} />
          <span className="navbar-brand mb-0 h1" style={{ marginLeft: "5px" }}>One-For-All</span>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><NavLink className="nav-link" to="/"><h6 data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Home</h6></NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/services"><h6 data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Services</h6></NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/contact"><h6 data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Contact</h6></NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/about"><h6 data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">About</h6></NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar