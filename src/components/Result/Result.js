import React from 'react';
import './Result.css';
import { loadSpinner } from '../../helper/helper';

const Result = ({
  result,
  setResult,
  searchTerm,
  setNominations,
  nominations,
  setIsLoading,
  setTransition,
  debouncedSearchTerm,
  error,
}) => {
  function updateNominationToLS(movie) {
    localStorage.setItem('nominationList', JSON.stringify([...new Set([...nominations, movie])]));
  }

  async function addNomination(movie) {
    await loadSpinner(setTransition, setIsLoading);

    //using set to ensure each nomination is unique
    setNominations([...new Set([...nominations, movie])]);

    // selected movie nomination button will be disabled
    const setupDisableButton =
      result &&
      result.map((entry) => {
        if (entry.imdbID === movie.imdbID) {
          return { ...entry, disabled: true };
        } else return { ...entry };
      });

    setResult(setupDisableButton);

    // add nomination to LS
    updateNominationToLS(movie);
  }

  function renderResult() {
    const totalNominations = nominations && nominations.length;
    const listResult = result.map((movie) => {
      return (
        <li key={movie.imdbID} className='movie__list'>
          {movie.Title}({movie.Year})
          <button
            disabled={totalNominations === 5 ? true : movie.disabled}
            className={`${movie.imdbID} result__button button`}
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
    debouncedSearchTerm && (
      <div className='result__container container'>
        <h5 className='result__header'>Results for "{searchTerm}"</h5>
        {result && !error && result.length > 0 && <ul>{renderResult()}</ul>}
        {error && <div className='result__error'>{error}</div>}
      </div>
    )
  );
};

export default Result;
