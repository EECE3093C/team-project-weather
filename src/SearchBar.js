import React, { useState } from 'react';

const PlantSearchBar = ({ plants, setFilteredPlants }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    const filteredPlants = plants.filter((plant) => {
      return plant.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredPlants(filteredPlants);
  };

  return (
    <div>
      <label htmlFor="search">Search for plants:</label>
      <input
        id="search"
        type="text"
        placeholder="Enter plant name"
        value={searchTerm}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default PlantSearchBar;
