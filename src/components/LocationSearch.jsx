import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';

const LocationSearch = () => {
  const [query, setQuery] = useState('');

  const debouncedSearch = debounce((value) => {
    // API call here
  }, 300);

  useEffect(() => {
    debouncedSearch(query);
    return () => debouncedSearch.cancel();
  }, [query]);
};