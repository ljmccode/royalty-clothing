import { useContext } from 'react';

import { CartContext } from '../contexts/cart.context';

import Button from '../components/button/button.component';
import CartItem from '../components/cart-tiem/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
        {/* <p className='empty-message'>Your cart is empty</p> */}
      </div>
      <Button>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
