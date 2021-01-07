import axios from 'axios';
export function getNominationsFromLS() {
  return JSON.parse(localStorage.getItem('nominationList'));
}

export function fetchMovies(searchTerm) {
  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
  const OMDB_API_URL = `https://www.omdbapi.com/?apiKey=${API_KEY}&type=movie`;
  const searchURL = `${OMDB_API_URL}&s=${searchTerm}`;
  const fallbackURL = `${OMDB_API_URL}&t=${searchTerm}`;

  // Search movies title with less than 3 characters
  if (searchTerm.length < 3) {
    return axios
      .get(fallbackURL)
      .then((res) => res.data)
      .catch((err) => {
        console.error(err);
        return [];
      });
  }

  return axios
    .get(searchURL)
    .then((res) => {
      if (res.data.Error) return res.data;
      return res.data;
    })
    .catch((err) => {
      console.error(err);
      return [];
    });
}

export async function loadSpinner(setTransition, setIsSearching) {
  setIsSearching(true);
  setTransition(true);

  setTimeout(() => {
    setTransition(false);
    setIsSearching(false);
  }, 1000);
}
