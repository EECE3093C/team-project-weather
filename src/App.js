
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

function App() {
  const [results, setResults] = useState([]);

  const handleSearchSubmit = (searchTerm) => {
    // Perform search using searchTerm and update results state
    setResults([
      { id: 1, title: 'Result 1', description: 'Description of Result 1' },
      { id: 2, title: 'Result 2', description: 'Description of Result 2' },
      { id: 3, title: 'Result 3', description: 'Description of Result 3' },
    ]);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      <SearchResults results={results} />
    </div>
  );
}

export default App;
