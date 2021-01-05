import React from 'react';

const Search = ({ setSearchTerm, searchTerm }) => {
  const handleOnChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <p>Movie Title</p>
      <input type='search' onChange={handleOnChange}></input>
    </div>
  );
};

export default Search;
