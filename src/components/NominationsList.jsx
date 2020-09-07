import React from 'react';
import '../styles/usernominations.css';

const NominationsList = ({ nominationsList }) => {

  const displayNominations = () => {
    if (nominationsList) {
      const nominationsListCopy = [...nominationsList];

      return nominationsListCopy.map( movie => {
        return (
          <li key={movie.id}>
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