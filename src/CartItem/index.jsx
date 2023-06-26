import React, { useContext } from 'react';
import {BsCartDashFill} from 'react-icons/bs';
import './styles.css';
import formatCurrency from '../utils/formatCurrency';
import propTypes from 'prop-types';
import AppContext from '../context/AppContext';

const CartItem = ({data}) => {

  const {cartItem, setCartItem} = useContext(AppContext);
  const {id, title, thumbnail, price} = data;

  const handleRemoveItem = () => {
    const updateItems = cartItem.filter((item) => item.id != id ); 
    setCartItem(updateItems);
  }; 

  return (
    <>
      <div className="cart-item">
        <img 
          src={thumbnail} 
          alt="imagem do produto" 
          className="cart-item-image"
        />
        <div className="cart-item-content">
          <h3 className="cart-item-title">{title}</h3>
          <h3 className="cart-item-price">{formatCurrency(price, 'BRL')}</h3>
          <button 
            type="button"
            className="button__remove-item"
            onClick={handleRemoveItem}
          > 
            <BsCartDashFill/>
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object
}.isRequired; 
