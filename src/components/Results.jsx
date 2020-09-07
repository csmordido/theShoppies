import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';

const Results = ({ setuserNominations, userNominations, setIsConfirmed, nominationsList }) => {
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

        if (response.data.Search) { 
          response.data.Search.forEach( movie => {
            const movieData = {
              title: movie.Title,
              year: movie.Year,
              id: movie.imdbID
            }
            resultsArr.push(movieData);
          });
        }
        
        setResults(resultsArr);
            
      } catch (error) {
        console.log(error);
        
      };
    }; 

    if (term) {
      const delay = setTimeout(() => {
        getMovies();
      }, 200);

      return () => {
        clearInterval(delay);
      }
    }
              
  }, [term]);
  
  const nominateMovie = (movie) => {
    setIsConfirmed(true ? false : null);
    setuserNominations(userNominations => [...userNominations, movie]);
  }

  const isUserNominated = (movieId) => {
    if (userNominations) {
      return userNominations.find( movie => movie.id === movieId );
    }
  }

  const isNominated = (movieId) => {
    if (nominationsList) {
      const nominated =  nominationsList.find( movie => movie.id === movieId );
      if (nominated) {
        return true;
      } else {
        return false;
      }
    }
  }

  const movies = results.map( movie => {
    return (
      <li key={movie.id}>
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
        <button 
          disabled={
            userNominations.length === 5 || isUserNominated(movie.id) || isNominated(movie.id)
            ? true 
            : false
          }
          type='button' 
          onClick={() => nominateMovie(movie)}
        >
          {
            !isUserNominated(movie.id) && !isNominated(movie.id)
            ? 'Nominate'
            : 'Nominated'
          }
        </button>
      </li>
    )
  });

  return (
    <div>
      <SearchBar setTerm={setTerm} term={term}/>
      <h2>Results for "{term}"</h2>
      <ul>
        {movies}
      </ul>
    </div>
  );
};

export default Results;