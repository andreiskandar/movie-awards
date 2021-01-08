import { useState } from 'react';

const useInterfaceState = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState('');

  return {
    isSearchingState: { isSearching, setIsSearching },
    errorState: { error, setError },
  };
};

export default useInterfaceState;
