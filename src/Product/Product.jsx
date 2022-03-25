import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
   const {picture, name, price} = props.product;
   return (
      <div>
         <div className='product'>
         <img src={picture} alt="" />
         <div className='product-info'>
            <h3 className='product-name'>{name}</h3>
            <p>Price: ${price}</p>
         </div>
         <button className='btn-cart'><p>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </p></button>
      </div>
      </div>
   );
};

export default Product;