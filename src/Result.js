import React from 'react';
import './Result.css';
import { updateSpinner } from './helper/helper';

const Result = ({ result, setResult, searchTerm, setNominations, nominations, setIsLoading, setTransition }) => {
  if (!result || result.length === 0) return null;

  async function addNomination(movie, key) {
    //using set to ensure each nomination is unique
    setNominations([...new Set([...nominations, movie])]);

    // selected movie nomination button will be disabled
    const setupDisableButton = result.map((entry, index) => {
      if (entry.imdbID === movie.imdbID) {
        return { ...entry, disabled: true };
      } else return { ...entry };
    });

    setResult(setupDisableButton);

    await updateSpinner(setTransition, setIsLoading);

    // add nomination to LS
    await updateNominationToLS(movie);
  }

  function updateNominationToLS(movie) {
    localStorage.setItem('nominationList', JSON.stringify([...new Set([...nominations, movie])]));
  }

  function renderResult() {
    const listResult = result.map((movie, key) => {
      return (
        <li key={movie.imdbID} className='movie__list'>
          {movie.Title}({movie.Year})
          <button
            disabled={movie.disabled}
            className={`${movie.imdbID} result__button button`}
            onClick={() => addNomination(movie, key)}
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
