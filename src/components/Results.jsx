import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import '../styles/results.css';
import noPoster from '../assets/no-poster.jpg'; 

const Results = ({ setuserNominations, userNominations, setIsConfirmed, nominationsList }) => {

  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}`, {
          params: {
            s: term,
            type: 'movie',
            r: 'json',
            page: 1
          }
        });
        
        const resultsArr = [];

        // push each movie object into the resultsArr only if there are found movies
        if (response.data.Search) { 
          response.data.Search.forEach( movie => {
            const movieData = {
              title: movie.Title,
              year: movie.Year,
              id: movie.imdbID,
              poster: movie.Poster
            }
            resultsArr.push(movieData);
          });
        }
        
        setResults(resultsArr);
            
      } catch (error) {
        console.log(error);
      };
    }; 

    // only call the getMovies function if the user has started typing
    if (term) {
      // with 200ms interval
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

  // function to check if movie in the result state is also in the userNominations state
  const isUserNominated = (movieId) => {
    if (userNominations) {
      return userNominations.find( movie => movie.id === movieId );
    }
  }

  // function to check if movie in the result state is also in the nominationsList state
  const isNominated = (movieId) => {
    if (nominationsList) {
      return nominationsList.find( movie => movie.id === movieId );
    }
  }

  const movies = results.map( movie => {
    return (
      <li key={movie.id}>
        <img src={(movie.poster === "N/A") ? noPoster : movie.poster} alt={movie.title}/>
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
    <div className='resultsContainer'>
      <SearchBar setTerm={setTerm} term={term}/>
      <h2>Results for "{term}"</h2>
      <ul className='results'>
        {movies}
      </ul>
    </div>
  );
};

export default Results;