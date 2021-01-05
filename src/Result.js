import React from 'react';
import classNames from 'classnames';
import './Result.css';

const Result = ({ result, searchTerm, setNominations, nominations, setDisableButton, disableButton }) => {
  if (!result || result.length === 0) return null;

  function addNomination(movie) {
    //using set to ensure each nomination is unique
    setNominations([...new Set([...nominations, movie])]);
    setDisableButton(!disableButton);
  }

  function renderResult() {
    const listResult = result.map((movie) => {
      return (
        <li key={movie.imdbID} className='movie__list'>
          {movie.Title}({movie.Year})
          <button
            className={`${movie.imdbID} result__button button`}
            // disabled={disableButton}
            onClick={() => addNomination(movie)}
          >
            Nominate
          </button>
        </li>
      );
    });

    return listResult;
  }

  return (
    <div className='result__container container'>
      {result.length > 0 && <h5 className='result__header'>Results for "{searchTerm}"</h5>}
      <ul>{renderResult()}</ul>
    </div>
  );
};

export default Result;
