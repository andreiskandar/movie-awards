import { useState, useEffect } from 'react';
import Search from './Search';
import Result from './Result';
import Banner from './Banner';
import NominationList from './NominationList';
import useDebounce from './hooks/useDebounce';
import './App.css';
import { getNominationsFromLS, searchMovies } from './helper/helper';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState([]);
  const [nominations, setNominations] = useState(getNominationsFromLS());
  const [isLoading, setIsLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [transition, setTransition] = useState(false);
  const [error, setError] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      searchMovies(debouncedSearchTerm, setError)
        .then(async (results) => {
          //make sure loading spinner completes cycle
          await setTimeout(() => {
            setIsSearching(false);
          }, 1000);

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
    <main className='App'>
      {/* render banner when nomination is 5 or greater*/}
      {nominations && nominations.length > 4 && <Banner />}

      <h2 className='header'>The Shoppies</h2>
      <Search setSearchTerm={setSearchTerm} isLoading={isLoading} isSearching={isSearching} />
      <div className='result-nomination'>
        {/* Render search result */}
        <Result
          result={result}
          setResult={setResult}
          searchTerm={searchTerm}
          setNominations={setNominations}
          nominations={nominations}
          setIsLoading={setIsLoading}
          setTransition={setTransition}
          transition={transition}
          debouncedSearchTerm={debouncedSearchTerm}
          error={error}
        />

        {/* Render nomination list */}
        {nominations.length > 0 && (
          <NominationList
            nominations={nominations}
            setNominations={setNominations}
            setResult={setResult}
            result={result}
            setIsLoading={setIsLoading}
            setTransition={setTransition}
            transition={transition}
          />
        )}
      </div>
    </main>
  );
}

export default App;
