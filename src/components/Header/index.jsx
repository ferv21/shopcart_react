import React from 'react';
import CartButton from '../CartButton';
import SearchBar from '../SearchBar';
import './styles.css';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">

          <SearchBar/>
          <CartButton/>
        </div>
      </header>
    </>
  );
};

export default Header;
