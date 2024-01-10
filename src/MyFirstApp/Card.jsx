import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
    return (
        <>
            <div className="card m-4" style={{ width: "400px" }}>
                <img src={props.imgsrc} className="card-img-top overflow-hidden" height={"300px"} alt={props.title} />
                <div className="card-body">
                    <h5 className="card-title fw-bold">{props.title}</h5>
                    <p className="card-text">{props.about}</p>
                </div>
                <div className="d-flex">
                    <NavLink className="btn btn-dark m-3" to={props.url} target={props.url.startsWith("/") ? null : "_blank"}>Explore</NavLink>
                </div>
            </div>
        </>
    );
};

export default Card;