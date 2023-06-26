import React, { useContext } from 'react';
import './styles.css';
import CartItem from '../CartItem';
import AppContext from '../context/AppContext';
import formatCurrency from '../utils/formatCurrency';

const Cart = () => {

  const {cartItem, isOpen} = useContext(AppContext);

  const totalPrice = cartItem.reduce((acc,item)=>{
    return item.price + acc;
  },0);

  return (
    <section className={`cart ${isOpen ? 'cart--active' : ''}`}>
      <div className="cart-items">
        {cartItem.map((item) => (
          <CartItem key={item.id} data={item}/>
        ))}
      </div>

      <div className="cart-resume">{formatCurrency(totalPrice,'BRL')}</div>
    </section>
  );
};

export default Cart;
