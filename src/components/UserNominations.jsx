import React from 'react';

const UserNominations = ({ userNominations, setuserNominations }) => {
  
  const removeMovie = (movieId) => {
    const userNominationsCopy = [...userNominations];
    const index = userNominationsCopy.findIndex( movie => movie.id === movieId);
    userNominationsCopy.splice(index, 1);
    setuserNominations(userNominationsCopy);
  }

  const nominations = userNominations.map( movie => {
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
    <section>
      <h2>Your Nominations</h2>
      {
        !userNominations.length
        ? <p>Start nominating five of your favourite movies!</p>
        : <ul>{nominations}</ul>
      }
      <button 
        disabled={userNominations.length === 5 ? false : true}
        type='button'
      >
        Confirm nominations
      </button>

    </section>
  );
};

export default UserNominations;