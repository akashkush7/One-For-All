import React from "react";

const Card = (props) => {
    return (
        <>
            <div className="card m-5">
                <img src={`https://picsum.photos/id/${props.pk}/200/200`} className="card-img-top" alt="image" />
                <div className="card-body">
                    <h5 className="card-title">{props.head}</h5>
                    <p className="card-text">{props.info}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </>
    );
};

export default Card;