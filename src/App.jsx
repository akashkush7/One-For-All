import React, { useState } from "react";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from './Card';
import Cards from "./Api";

const App = () => {

  return (
    <>
      <div className="d-flex flex-wrap justify-content-center bg-dark-subtle">
        {Cards.map((items, index) => {
          return <Card key={index} pk={items.id} head={items.title} info={items.detail} />
        })}
      </div>
    </>
  );
}

export default App;
