import React from 'react';

const SearchBar = () => {
  return (
    <form>
      <label className='visuallyHidden' htmlFor='search'>Search for a movie</label>
      <input type='text' placeholder='Search for a movie' id='search' />
      <button type='button'>Search</button>
    </form>
  );
};

export default SearchBar;