import React from 'react';
import './Search.css';

const Search = ({ setSearchTerm }) => {
  const handleOnChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  return (
    <div className='search__container container'>
      <h5 className='search__header'>Movie Title</h5>
      <input type='search' onChange={handleOnChange} placeholder='Search Movie' className='input__search-bar'></input>
    </div>
  );
};

export default Search;
