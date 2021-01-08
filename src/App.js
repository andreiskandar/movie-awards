import Header from './components/Header/Header';
import Search from './components/Search/Search';
import Result from './components/Result/Result';
import Banner from './components/Banner/Banner';
import NominationList from './components/NominationList/NominationList';
import MovieContext from './components/MovieContext/MovieContext';
import useApplicationData from './hooks/useApplicationData';
import './App.css';

function App() {
  const {
    errorState,
    isSearchingState,
    resultState,
    nominationState,
    searchTermState,
    debouncedSearchTerm,
  } = useApplicationData();

  const { error, setError } = errorState;
  const { isSearching, setIsSearching } = isSearchingState;
  const { result, setResult } = resultState;
  const { nominations, setNominations } = nominationState;
  const { searchTerm, setSearchTerm } = searchTermState;

  return (
    <MovieContext.Provider
      value={{
        result,
        setResult,
        searchTerm,
        setSearchTerm,
        nominations,
        setNominations,
        isSearching,
        setIsSearching,
        error,
        setError,
        debouncedSearchTerm,
      }}
    >
      <div className='App'>
        {/* render banner when nomination is 5 or greater*/}
        <Header />
        <Search />
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
