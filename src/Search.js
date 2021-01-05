import React from 'react';

const Search = ({ setSearchTerm }) => {
  const handleOnChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h4>Movie Title</h4>
      <input type='search' onChange={handleOnChange} placeholder='Search Movie'></input>
    </div>
  );
};

export default Search;
