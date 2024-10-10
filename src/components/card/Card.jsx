import React from "react";
import "./Card.css";

const card = ({ title, description, imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default card;
