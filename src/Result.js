import React from 'react';

const Result = ({ searchTerm }) => {
  console.log('key: ', process.env.REACT_APP_OMDB_API_KEY);

  const OMBD_BASE_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=`;
  return <div>{searchTerm && <div>Results for "{searchTerm}"</div>}</div>;
};

export default Result;
