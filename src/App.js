import { useState, useEffect } from 'react';
import Search from './Search';
import Result from './Result';
import useDebounce from './hooks/useDebounce';
import axios from 'axios';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState([]);

  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
  const BASE_URL = 'http://www.omdbapi.com/';

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      axios
        .get(`${BASE_URL}?apiKey=${API_KEY}&s=${debouncedSearchTerm}`)
        .then((res) => {
          console.log(res.data.Search);
          setResult(res.data.Search);
        })
        .catch((err) => {
          console.error(err);
          return [];
        });
    } else {
      setResult([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className='App'>
      <Search setSearchTerm={setSearchTerm} setResult={setResult} />
      <Result result={result} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
