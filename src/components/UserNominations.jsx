import React from 'react';

const UserNominations = ({ userNominations }) => {
  const nominations = userNominations.map( movie => {
    return (
      <li key={movie.id}>
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
        <button type='button'>X</button>
      </li>
    );
  });

  return (
    <section>
      <h2>Your Nominations</h2>
      <ul>
        {nominations}
      </ul>
      <button type='button'>Confirm nominations</button>
    </section>
  );
};

export default UserNominations;