import React from 'react';

const NominationsList = ({ nominationsList }) => {

  const displayNominations = () => {
    if (nominationsList) {
      const nominationsListCopy = [...nominationsList];

      return nominationsListCopy.map( movie => {
        return (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
          </li>
        );
      });
    }
  }

  const nominations = displayNominations();

  return (
    <section>
      <h2>Nominated Movies</h2>
      <ul>
        {nominations}
      </ul>
    </section>
  );
};

export default NominationsList;