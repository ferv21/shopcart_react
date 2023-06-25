import React, { useContext, useEffect } from 'react';
import ProductCard from '../ProductCard';
import './styles.css';
import fetchProducts from '../../api/fetchProducts';
import Loading from '../Loading';
import AppContext from '../../context/AppContext';



const Products = () => {

  const {
    products, 
    setProducts,
    loading, 
    setLoading} = useContext(AppContext);


  useEffect(() => {
    fetchProducts('iphone').then((res) => {
      setProducts(res);
      setLoading(false);
    });
  },[]);


  return (
    <>
      {loading ?  (<Loading/>)
        : 
        ( 
          <section className="container products">
            {products.map((product) => <ProductCard key={product.id} data={product} />)}
          </section>
        )}
    </>
  );
};

export default Products;
