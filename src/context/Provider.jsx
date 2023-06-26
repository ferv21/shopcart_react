import React, {useState} from 'react';
import AppContext from './AppContext';
import propTypes from 'prop-types';


const Provider = ({children}) => {

  const [cartItem, setCartItem] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const value = {
    products,
    setProducts,
    loading,
    setLoading,
    cartItem, 
    setCartItem,
    isOpen, 
    setIsOpen
  };


  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default Provider;


Provider.propTypes = {
  children:propTypes.any,
}.isRequired;
