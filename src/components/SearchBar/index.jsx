import React, {useContext, useState} from 'react';
import fetchProducts from '../../api/fetchProducts';
import {BsSearch} from 'react-icons/bs';
import './styles.css';
import AppContext from '../../context/AppContext';

const SearchBar = () => {

  const [searchValue, setSearchValue ] = useState('');

  const {setProducts, setLoading} = useContext(AppContext);

  const handleSearch = async (event) =>{
    event.preventDefault();
    setLoading(true);
    const products = await fetchProducts(searchValue);
    setLoading(false);
    setProducts(products);
    setSearchValue('');
  };
 
  return (
    <>
      <form onSubmit={handleSearch} className="search-bar">
        <input type="search" 
          placeholder="Buscar produtos" 
          className="search__input" 
          value={searchValue}
          required
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <button type="submit" className="search__button">
          <BsSearch/>
        </button>
      </form>
    </>
  );
};

export default SearchBar;
