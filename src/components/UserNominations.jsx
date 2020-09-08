import React from 'react';
import '../styles/usernominations.css';

const UserNominations = ({ userNominations, setuserNominations, setIsConfirmed }) => {
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

  // function to store nominated movies in the local storage
  const confirmNominations = () => {
    // get items from the local storage
    const nominations = localStorage.getItem('nominations');

    // if there is data, combine them with the newly user nominated movies and store the combined array in the local storage
    if (nominations) {
      const parsedNominations = JSON.parse(nominations)
      localStorage.setItem('nominations', JSON.stringify([...parsedNominations, ...userNominations]));
    } else {
      localStorage.setItem('nominations', JSON.stringify(userNominations));
    };

    setuserNominations([]);
    setIsConfirmed(true);
  };

  const greenText = {
    color: 'var(--color-green)',
    fontWeight: 500
  }

  return (
    <div className='userNomsContainer'>
      <h2>Your Nominations</h2>
      {
        !userNominations.length
        ? <p>Start your search and nominate <span style={greenText}>five</span> of your favourite movies for The Shoppies movie awards!</p>
        : <ul className='results userNoms'>{nominations}</ul>
      }
      <button 
        disabled={userNominations.length === 5 ? false : true}
        type='button'
        className='confirmBtn'
        onClick={confirmNominations}
      >
        Confirm nominations
      </button>

    </div>
  );
};

export default UserNominations;