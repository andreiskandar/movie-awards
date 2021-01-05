import React from 'react';

const Result = ({ result, searchTerm }) => {
  if (!result) return null;

  function renderResult() {
    return (
      <ul>
        {result.map((movie, index) => (
          <li key={index}>
            {movie.Title} {movie.Year}
            <button> Nominate </button>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div>
      {result.length > 0 && <div>Results for "{searchTerm}"</div>}
      {renderResult()}
    </div>
  );
};

export default Result;
