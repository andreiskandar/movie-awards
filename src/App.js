import { useState, useEffect } from 'react';
import Search from './Search';
import Result from './Result';
import Banner from './Banner';
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
      const searchURL = `${BASE_URL}?apiKey=${API_KEY}&s=${debouncedSearchTerm}&type=movie&page=1`;
      axios
        .get(searchURL)
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
      <h2 className='header'>The Shoppies</h2>
      <Search setSearchTerm={setSearchTerm} />
      <div className='result-nomination'>
        <Result
          result={result}
          setResult={setResult}
          searchTerm={searchTerm}
          setNominations={setNominations}
          nominations={nominations}
        />
        <NominationList
          nominations={nominations}
          setNominations={setNominations}
          setResult={setResult}
          result={result}
        />
      </div>

      {/* render banner */}
      {nominations.length === 5 && <Banner />}
    </div>
  );
}

export default App;
