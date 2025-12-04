import React, { useState, useEffect } from "react";
import "./App.css";
import Profile from "./components/Profile";

const Image = (props) => {
  return <img src={props.src} alt={props.title} />;
};

const Card = ({ character }) => {
  const { name, image, species, status } = character;
  return (
    <div className="card">
      <Image src={image} alt={name} />
      <h2>{name}</h2>
      <p>
        {species} - {status}
      </p>
    </div>
  );
};

const App = () => {
  return (
    <section className="card-section">
      <Profile username="Stefania Formato"/>
    </section>
  );
};

export default App;
