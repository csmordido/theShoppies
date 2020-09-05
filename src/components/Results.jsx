import React, { useState, useEffect, useRef } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
// import { useCallback } from 'react';

const Results = ({ setuserNominations }) => {
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
          const movieData = {
            title: movie.Title,
            year: movie.Year,
            id: movie.imdbID
          }
          resultsArr.push(movieData);
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
  
  const nominateMovie = (movie) => {
    setuserNominations(userNominations => [...userNominations, movie]);
  }


  const movies = results.map(movie => {
    return (
      <li key={movie.id}>
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
        <button 
          type='button' 
          onClick={() => nominateMovie(movie)}
        >
          Nominate
        </button>
      </li>
    )
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