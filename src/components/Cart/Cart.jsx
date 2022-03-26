import React from 'react';
import { useState } from 'react';
import './Cart.css'

const Cart = ({cart}) => {
   let newCart = cart;
   let randomCart = Math.floor(Math.random() * newCart.length);

   const [item, setItem] = useState([])



   const handlePickForMe = () => {
         let rand = (newCart[randomCart].name);
         setItem(rand);
      
   }
   
   return (
      <div className='cart'>
         <h2>Selected Toy's</h2>
         {
            cart.map(item =>(
               <h4 key={item.id}>{item.name}</h4>
            ))
         }
         <button onClick={handlePickForMe} className='cart-btn1'>Pick For Me</button>
         <br />
         <h4>Your Chosen Item: {item}</h4>
         <button className='cart-btn2'>Choose Again</button>
      </div>
   );
};

export default Cart;