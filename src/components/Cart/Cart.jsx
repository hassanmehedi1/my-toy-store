import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
   
   return (
      <div className='cart'>
         <h2>Selected Toy's</h2>
         {
            cart.map(item =>(
               <h4>{item.name}</h4>
            ))
         }
      </div>
   );
};

export default Cart;