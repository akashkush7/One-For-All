import React from "react";
import About from './About';
import Contact from './Contact';
import { Routes, Route, NavLink } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

const RouteLink = () => {
    return (
        <>
            <div className="d-flex justify-content-around bg-black fs-1">
                <NavLink className="active_option" to="/home">Home</NavLink>
                <NavLink className="active_option" to="/about">About</NavLink>
                <NavLink className="active_option" to="/contact">Contact</NavLink>
            </div>
            <Routes>
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/home" element={<App />} />
            </Routes>
        </>
    );
};

export default RouteLink;