import React, { useContext } from 'react';
import {AiOutlineShoppingCart} from 'react-icons/ai';
import './styles.css';
import AppContext from '../../context/AppContext';

const CartButton = () => {

  const {cartItem, isOpen, setIsOpen} = useContext(AppContext);


  return(
    <>
      <button type="button" 
        className="cart__button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AiOutlineShoppingCart/>
        {cartItem.length > 0 ? (<span className="cart-status">{cartItem.length}</span>) : ('')}
      </button>
    </>
  );
};

export default CartButton;
