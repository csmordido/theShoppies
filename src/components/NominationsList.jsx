import React, { useEffect } from 'react';

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
    <>
      <h2>Nominated Movies</h2>
      <ul>
        {nominations}
      </ul>
    </>
  );
};

export default NominationsList;