import Button from '../components/button/button.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        <p className='empty-message'>Your cart is empty</p>
      </div>
      <Button>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
