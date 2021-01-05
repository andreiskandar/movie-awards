import React from 'react';

const Result = ({ result, searchTerm }) => {
  if (!result) return null;

  function renderResult() {
    return result.map((movie) => (
      <li>
        {movie.Title} {movie.Year}
        <button> Nominate </button>
      </li>
    ));
  }
  return (
    <div>
      <div>Results for "{searchTerm}"</div>
      <ul>{renderResult()}</ul>
    </div>
  );
};

export default Result;
