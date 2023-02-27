import React from 'react';
import PlantCard from './PlantCard';

function PlantIndex(props) {
  const { plants } = props;

  return (
    <div>
      <h2>Plant Index</h2>
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}
    </div>
  );
}

export default PlantIndex;
