import React from 'react';

const SearchBar = ({ setTerm, term }) => {
  return (
    <form>
      <label className='visuallyHidden' htmlFor='search'>Search for a movie</label>
      <input 
        type='text' 
        placeholder='Search for a movie' 
        id='search' 
        onChange={ (e) => setTerm(e.target.value) }
        value={term}
      />
    </form>
  );
};

export default SearchBar;