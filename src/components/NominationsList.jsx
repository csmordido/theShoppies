import React from 'react';

const NominationsList = ({ nominationsList }) => {
  const nominationsListCopy = [...nominationsList]

  const removeMovie = (movieId) => {
    const nominations = localStorage.getItem('nominations');

    if (nominations) {
      const parsedNominations = JSON.parse(nominations);
      console.log('x', parsedNominations);
      const index = parsedNominations.findIndex( movie => movie.id === movieId );
      parsedNominations.splice(index, 1);
      localStorage.setItem('nominations', JSON.stringify(parsedNominations));
    }
  }

  const nominations = nominationsListCopy.map( movie => {
    return (
      <li key={movie.id}>
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
        <button 
          type='button'
          onClick={() => removeMovie(movie.id)}
        >
            X
        </button>
      </li>
    );
  });

  return (
    <>
      <h2>Nominated Movies</h2>
      <ul>
        {nominations}
      </ul>
    </>
  );
};

export default NominationsList;