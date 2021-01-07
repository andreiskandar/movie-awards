import { useEffect, useState } from 'react';
import useDebounce from './useDebounce';

const useSearchData = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState([]);
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

  return { debouncedSearchTerm, setSearchTerm };
};

export default useSearchData;
