import React from 'react';

const Result = ({ result, searchTerm, setNominations, nominations }) => {
  if (!result) return null;

  function addNomination(movie) {
    //using set to ensure each nomination is unique
    setNominations([...new Set([...nominations, movie])]);
  }

  function renderResult() {
    return (
      <ul>
        {result.map((movie) => (
          <li key={movie.imdbID}>
            {movie.Title}({movie.Year})<button onClick={() => addNomination(movie)}> Nominate </button>
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
