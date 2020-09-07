import React from 'react';
import '../styles/usernominations.css';
import noPoster from '../assets/no-poster.jpg'; 

const NominationsList = ({ nominationsList }) => {

  const displayNominations = () => {
    if (nominationsList) {
      const nominationsListCopy = [...nominationsList];

      return nominationsListCopy.map( movie => {
        return (
          <li key={movie.id}>
            <img src={(movie.poster === "N/A") ? noPoster : movie.poster} alt={movie.title}/>
            <h3>{movie.title}</h3>
            <p className='nomsListYear'>{movie.year}</p>
          </li>
        );
      });
    }
  }

  const nominations = displayNominations();

  return (
    <section className='wrapper nomsList'>
      <h2>Nominated Movies</h2>
      <ul className='results userNoms'>
        {nominations}
      </ul>
    </section>
  );
};

export default NominationsList;