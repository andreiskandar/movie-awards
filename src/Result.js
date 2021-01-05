import React from 'react';

const Result = ({ result, searchTerm, setNominations, nominations }) => {
  if (!result) return null;

  function handleOnClick(movie) {
    setNominations([...nominations, movie]);
  }

  function renderResult() {
    return (
      <ul>
        {result.map((movie, index) => (
          <li key={movie.imdbID}>
            {movie.Title} {movie.Year}
            <button onClick={() => handleOnClick(movie)}> Nominate </button>
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
