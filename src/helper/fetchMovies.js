import axios from 'axios';

export default function fetchMovies(searchTerm) {
  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
  const OMDB_API_URL = `https://www.omdbapi.com/?apiKey=${API_KEY}&type=movie`;
  const searchURL = `${OMDB_API_URL}&s=${searchTerm}`;
  const fallbackURL = `${OMDB_API_URL}&t=${searchTerm}`;

  // Search movies title with less than 3 characters
  if (searchTerm.length < 3) {
    return axios
      .get(fallbackURL)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err;
      });
  }

  return axios
    .get(searchURL)
    .then((res) => {
      if (res.data.Error) return res.data;
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}
