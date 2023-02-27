import React, { Component, useState } from 'react';
import PlantIndex from './PlantIndex';


// function App() {
class App extends Component {

  render() {
    return (
      <div>
        <p>HIIII</p>
        <input
          type="text"
          placeholder="Search Plants"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <PlantIndex searchTerm={searchTerm} />
      </div>
);
  }
}

export default App;
