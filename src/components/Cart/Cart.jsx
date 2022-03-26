import swal from 'sweetalert';
import './Cart.css'

const Cart = ({cart, handleChooseAgain}) => {
   let newCart = cart;
   let randomCart = Math.floor(Math.random() * newCart.length);


   const handlePickForMe = () => {

         swal(
            `${newCart[randomCart].name}`
         )
         
      
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
         <button onClick={handleChooseAgain}className='cart-btn2'>Choose Again</button>
         
      </div>
   );
};

export default Cart;