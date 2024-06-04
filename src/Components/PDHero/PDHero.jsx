import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../Redux/productsApi.jsx';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/cartSlice';
import Styles from './PDHero.module.css'

function PDHero() {
    const { productId } = useParams();
    const { data, error, isLoading } = useGetProductByIdQuery(productId);
    const dispatch = useDispatch();
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error fetching product details</div>;
    }
  
    const { id, title, category, price, thumbnail, description } = data;
  
    const handleAddToCart = () => {
      dispatch(addToCart({ id, title, imageUrl: thumbnail, price }));
    };

  return (
    <div>PDHero</div>
  )
}

export default PDHero