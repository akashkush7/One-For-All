import React from 'react'
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return (
        <div className="bgimg">
            <div className="center text-center">
                <h1 className="fw-bold text-capitalize">{props.name}</h1>
                <br />
                <p>{props.about}</p>
                <br />
                <NavLink className="btn btn-light fs-4" to={props.url}>{props.btnname}</NavLink>
            </div>
        </div>
    );
};

export default Common;