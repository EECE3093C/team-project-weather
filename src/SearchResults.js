import React from 'react';

function SearchResults(props) {
  return (
    <div>
      {props.results.map((result) => (
        <div key={result.id}>
          <h3>{result.title}</h3>
          <p>{result.description}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
