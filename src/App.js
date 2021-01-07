import { useState, useEffect } from 'react';
import Search from './components/Search/Search';
import Result from './components/Result/Result';
import Banner from './components/Banner/Banner';
import NominationList from './components/NominationList/NominationList';
import useDebounce from './hooks/useDebounce';
import './App.css';
import { getNominationsFromLS, fetchMovies } from './helper/helper';
import Header from './components/Header/Header';
import MovieContext from './components/MovieContext/MovieContext';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState([]);
  const [nominations, setNominations] = useState([] || getNominationsFromLS());
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [transition, setTransition] = useState(false);
  const [error, setError] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      fetchMovies(debouncedSearchTerm, setError)
        .then(async (results) => {
          //make sure loading spinner completes cycle
          await setTimeout(() => {
            setIsSearching(false);
          }, 1000);
          return await results;
        })
        .then((results) => {
          if (results.Error) {
            setError(results.Error);
          } else {
            const searchResult = results.Search ? results.Search : [results];
            setResult(searchResult);
            setError('');
          }
        })

        .catch((err) => setError('Something went wrong...'));
    } else {
      setResult([]);
    }
  }, [debouncedSearchTerm]);

  return (
    <MovieContext.Provider
      value={{
        result,
        setResult,
        searchTerm,
        setSearchTerm,
        nominations,
        setNominations,
        isLoading,
        setIsLoading,
        isSearching,
        setIsSearching,
        error,
        setError,
        transition,
        setTransition,
        debouncedSearchTerm,
      }}
    >
      <div className='App'>
        {/* render banner when nomination is 5 or greater*/}
        <Header />
        <Search setSearchTerm={setSearchTerm} isLoading={isLoading} isSearching={isSearching} />
        {nominations && nominations.length > 4 && <Banner />}

        <div className='result-nomination'>
          {/* Render search result */}
          <Result />

          {/* Render nomination list */}
          {nominations && nominations.length > 0 && <NominationList />}
        </div>
      </div>
    </MovieContext.Provider>
  );
}

export default App;
