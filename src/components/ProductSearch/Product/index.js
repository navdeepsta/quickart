import React from 'react';
import './Product.css';

export default function Product(props) {
    const { title, main_image, price } = props.product;
  return (
    <div className='product'>
        <img src={main_image} onClick={props.onProductClick}/>
        <p>{title}</p>
        <h3>${price}</h3>
        <input type='number'/>
        <button>AddToCard</button>
    </div>
  )
}
 