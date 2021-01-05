import { useState, useEffect } from 'react';
import Search from './Search';
import Result from './Result';
import NominationList from './NominationList';
import useDebounce from './hooks/useDebounce';
import axios from 'axios';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState([]);
  const [nominations, setNominations] = useState([]);

  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
  const BASE_URL = 'http://www.omdbapi.com/';

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      axios
        .get(`${BASE_URL}?apiKey=${API_KEY}&s=${debouncedSearchTerm}&type=movie`)
        .then((res) => {
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
      <div>The Shoppies</div>
      <Search setSearchTerm={setSearchTerm} />
      <Result result={result} searchTerm={searchTerm} setNominations={setNominations} nominations={nominations} />
      <NominationList nominations={nominations} setNominations={setNominations} />
    </div>
  );
}

export default App;
