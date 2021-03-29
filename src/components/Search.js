import React from 'react';
import { useParams } from 'react-router-dom';

const Search = () => {
  const { searchTerm } = useParams();
  return <h1>{searchTerm}</h1>;
};

export default Search;
