import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
   let name;
   for(const product of cart){
      name = product.name;
   }
   return (
      <div className='cart'>
         <h2>Selected Toy's</h2>
         <p>{name}</p>
      </div>
   );
};

export default Cart;