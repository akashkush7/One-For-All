import React from 'react';
import Card from './Card';

const Services = (props) => {
    return (
        <>
            <div>
                <br />
                <br />
                <h1 className="text-center fw-bold mt-5">{props.title}</h1>
                <p className="text-center fs-4 p-2">{props.about}</p>
                <br />
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                {props.name.map((Item, index) => {
                    return <Card key={index} title={Item.title} imgsrc={Item.imgsrc} about={Item.about} url={Item.url} />
                })}
            </div>
        </>
    )
}

export default Services;