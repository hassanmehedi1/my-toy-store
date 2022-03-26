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
         <h3>Selected Toy's</h3>
         {
            cart.map(item =>(
               <h5 key={item.id}>{item.name}</h5>
            ))
            
         }
         <button onClick={handlePickForMe} className='cart-btn1'>Pick For Me</button>
         <br />
         <button onClick={handleChooseAgain}className='cart-btn2'>Choose Again</button>
         
      </div>
   );
};

export default Cart;