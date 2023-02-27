import React from 'react';

const PlantCard = ({ name, description, image }) => {
  return (
    <div className="plant-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default PlantCard;
