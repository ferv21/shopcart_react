import React, {useState} from 'react';
import {BsSearch} from 'react-icons/bs';
import './styles.css';

const SearchBar = () => {

  const [searchValue, setSearchValue ] = useState('');
 
  return (
    <>
      <form className="search-bar">
        <input type="search" 
          placeholder="Buscar produtos" 
          className="search__input" 
          value={searchValue}
          required
          onChange={(event) => setSearchValue(event.target.value)}
        />
        {searchValue}
        <button type="submit" className="search__button">
          <BsSearch/>
        </button>
      </form>
    </>
  );
};

export default SearchBar;
