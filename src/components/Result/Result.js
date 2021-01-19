import React, { useContext } from 'react';
import './Result.css';
import { loadSpinner } from '../../helper/helper';
import MovieContext from '../MovieContext/MovieContext';

const Result = () => {
  const {
    result,
    setResult,
    searchTerm,
    setNominations,
    nominations,
    debouncedSearchTerm,
    setIsSearching,
    error,
  } = useContext(MovieContext);

  function updateNominationToLS(movie) {
    localStorage.setItem('nominationList', JSON.stringify([...new Set([...nominations, movie])]));
  }

  function doesMovieExistInLS(movie) {
    const checkMoviesFromLS = nominations && nominations.find((nomination) => nomination.imdbID === movie.imdbID);
    return checkMoviesFromLS ? true : false;
  }

  function addNomination(movie) {
    function updateButton() {
      const disableButtonAfterNominated =
        result &&
        result.map((entry) => {
          if (entry.imdbID === movie.imdbID) {
            return { ...entry, disabled: true };
          } else return { ...entry };
        });
      setResult(disableButtonAfterNominated);
    }

    loadSpinner(setIsSearching).then(() => {
      updateButton();
      //using set to ensure each nomination is unique

      setNominations([...new Set([...nominations, movie])]);
      updateNominationToLS(movie);
    });
  }

  function renderResult() {
    const totalNominations = nominations && nominations.length;

    const listResult = result.map((movie) => {
      return (
        <li key={movie.imdbID} className='movie__list'>
          {movie.Title}({movie.Year})
          <button
            disabled={doesMovieExistInLS(movie) ? true : totalNominations === 5 ? true : movie.disabled}
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
