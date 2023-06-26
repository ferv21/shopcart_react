import React from 'react';
import Header from './components/Header';
import Products from './components/Products';
import Provider from './context/Provider';
import Cart from './Cart';

function App() {
  return (
    <Provider>
      <Header/>
      <Products/>
      <Cart/>
    </Provider>
  );
}

export default App;
