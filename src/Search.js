import React from 'react';
import axios from 'axios';

const Search = ({ setSearchTerm, searchTerm, setResult }) => {
  const handleOnChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div>Movie Title</div>
      <input type='search' onChange={handleOnChange}></input>
    </div>
  );
};

export default Search;
