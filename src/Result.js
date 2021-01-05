import React from 'react';

const Result = ({ result, searchTerm, setNominations, nominations, setDisableButton, disableButton }) => {
  if (!result) return null;

  function addNomination(movie) {
    //using set to ensure each nomination is unique
    setNominations([...new Set([...nominations, movie])]);
    setDisableButton(!disableButton);
  }

  function renderResult() {
    return (
      <ul>
        {result.map((movie) => (
          <li key={movie.imdbID}>
            {movie.Title}({movie.Year})
            <button disabled={disableButton} onClick={() => addNomination(movie)}>
              Nominate
            </button>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div>
      {result.length > 0 && <h4>Results for "{searchTerm}"</h4>}
      {renderResult()}
    </div>
  );
};

export default Result;
