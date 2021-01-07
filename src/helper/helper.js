import axios from 'axios';
export function getNominationsFromLS() {
  return JSON.parse(localStorage.getItem('nominationList'));
}

export function searchMovies(searchTerm) {
  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
  const BASE_URL = 'http://www.omdbapi.com/';
  const searchURL = `${BASE_URL}?apiKey=${API_KEY}&s=${searchTerm}&type=movie&page=1`;
  return axios
    .get(searchURL)
    .then((res) => res.data.Search)
    .catch((err) => {
      console.error(err);
      return [];
    });
}

export function updateSpinner(setTransition, setIsLoading) {
  // set spinner
  setIsLoading(true);

  //remove spinner
  setTimeout(() => {
    setTransition(true);
    setIsLoading(false);
  }, 1000);
  setTransition(false);
}
