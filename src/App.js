import { useState, useEffect } from 'react';
import Search from './Search';
import Result from './Result';
import Banner from './Banner';
import Status from './Status';
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
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      searchMovies(debouncedSearchTerm).then(async (results) => {
        //make sure loading spinner completes cycle
        await setTimeout(() => {
          setIsSearching(false);
        }, 1000);

        setResult(results);
      });
    } else {
      setResult([]);
    }
  }, [debouncedSearchTerm]);

  console.log('nominations: ', nominations);

  return (
    <main className='App'>
      <h2 className='header'>The Shoppies</h2>
      <Search setSearchTerm={setSearchTerm} />
      {(isLoading || isSearching) && <Status message='' />}

      <div className='result-nomination'>
        {/* Render search result */}
        {!isSearching && (
          <Result
            result={result}
            setResult={setResult}
            searchTerm={searchTerm}
            setNominations={setNominations}
            nominations={nominations}
            setIsLoading={setIsLoading}
            setTransition={setTransition}
          />
        )}
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

      {/* render banner */}
      {nominations.length > 4 && <Banner />}
    </main>
  );
}

export default App;
