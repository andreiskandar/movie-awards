import React from 'react';

const Search = ({ setSearchTerm }) => {
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
