import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

const Results = () => {
  const [term, setTerm] = useState('little women');
  const [results, setResults] = useState([]);

  useEffect(() => {
   const getMovies = async () => {
    try {
      const response = axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}`, {
        params: {
          s: term,
          type: 'movie',
          r: 'json',
          page: 1
        }
      });

      console.log(response);

    } catch (error) {
      console.log(error);
      
    };
   }; 

   getMovies();
  });

  return (
    <>
      <SearchBar />
      <h2>Results for ""</h2>
      <ul>
        <li>Results</li>
        <li>Results</li>
        <li>Results</li>
      </ul>
    </>
  );
};

export default Results;