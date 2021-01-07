import React, { useContext } from 'react';
import MovieContext from '../MovieContext/MovieContext';
import Status from '../Status/Status';
import './Search.css';

const Search = () => {
  const { setSearchTerm, isSearching, isLoading } = useContext(MovieContext);
  const handleOnChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  return (
    <div className='search__container container'>
      <h5 className='search__header'>Movie Title</h5>
      <input type='search' onChange={handleOnChange} placeholder='Search Movie' className='input__search-bar'></input>
      {isSearching && <Status />}
    </div>
  );
};

export default Search;
