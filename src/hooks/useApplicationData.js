import { useEffect, useState } from 'react';
import useDebounce from './useDebounce';
import useInterfaceState from './useInterfaceState';
import fetchMovies from '../helper/fetchMovies';
import { getNominationsFromLS } from '../helper/helper';

const useApplicationData = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState([]);
  const { isSearchingState, errorState } = useInterfaceState();
  const { isSearching, setIsSearching } = isSearchingState;
  const [nominations, setNominations] = useState(getNominationsFromLS() === null ? [] : getNominationsFromLS());

  const { error, setError } = errorState;

  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      fetchMovies(debouncedSearchTerm)
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

  return {
    debouncedSearchTerm,
    searchTermState: { searchTerm, setSearchTerm },
    resultState: { result, setResult },
    errorState: { error, setError },
    isSearchingState: { isSearching, setIsSearching },
    nominationState: { nominations, setNominations },
  };
};

export default useApplicationData;
