import React from 'react';
import '../styles/searchbar.css';

const SearchBar = ({ setTerm, term }) => {
  return (
    <form className='searchForm'>
      <label className='visuallyHidden' htmlFor='search'>Search for a movie you'd like to nominate</label>
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