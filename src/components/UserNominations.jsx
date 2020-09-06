import React from 'react';

const UserNominations = ({ userNominations, setuserNominations }) => {
  const userNominationsCopy = [...userNominations];

  const removeMovie = (movieId) => {
    const index = userNominationsCopy.findIndex( movie => movie.id === movieId);
    userNominationsCopy.splice(index, 1);
    setuserNominations(userNominationsCopy);
  }

  const nominations = userNominationsCopy.map( movie => {
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

  const confirmNominations = () => {
    const nominations = localStorage.getItem('nominations');

    if (nominations) {
      const parsedNominations = JSON.parse(nominations)
      localStorage.setItem('nominations', JSON.stringify([...parsedNominations, ...userNominations]));
    } else {
      localStorage.setItem('nominations', JSON.stringify(userNominations));
    };
  };

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
        onClick={confirmNominations}
      >
        Confirm nominations
      </button>

    </section>
  );
};

export default UserNominations;