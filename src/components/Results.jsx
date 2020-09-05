import React, { useState, useEffect, useRef } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

const Results = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  
  useEffect(() => {
    
    const getMovies = async () => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}`, {
          params: {
            s: term,
            type: 'movie',
            r: 'json',
            page: 1
          }
        });

        const resultsArr = [];
            
        response.data.Search.forEach( movie => {
          resultsArr.push(movie);
        });
        
        setResults(resultsArr);
            
      } catch (error) {
        console.log(error);
        
      };
    }; 

    if (term) {
        getMovies();
    }
              
  }, [term]);

  const movies = results.map(movie => {
    return <li>{movie.Title}</li>
  });

  return (
    <>
      <SearchBar setTerm={setTerm} term={term}/>
      <h2>Results for "{term}"</h2>
      <ul>
        {movies}
      </ul>
    </>
  );
};

export default Results;