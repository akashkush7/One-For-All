import React from 'react'
import { NavLink } from 'react-router-dom';
import CommonImg from "../Images/Home.png";

const Common = (props) => {
    return (
        <div className="HomeC">
            <div className='imagediv'>
                <img src={CommonImg} alt="Home.png" />
            </div>
            <div className="center text-center w-75 mt-5">
                <h1 className="fw-bold text-capitalize">{props.name}</h1>
                <br />
                <p>{props.about}</p>
                <br />
                <NavLink className="btn btn-dark fs-4 mb-5" to={props.url}>{props.btnname}</NavLink>
            </div>
        </div>
    );
};

export default Common;