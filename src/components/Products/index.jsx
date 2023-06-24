import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard';
import './styles.css';
import fetchProducts from '../../api/fetchProducts';


const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts('iphone').then((res) => {
      setProducts(res);
    });
  },[]);


  return (
    <>
      <section className="container products">
        {products.map((product) => <ProductCard key={product.id} data={product} />)}
      </section>
    </>
  );
};

export default Products;
