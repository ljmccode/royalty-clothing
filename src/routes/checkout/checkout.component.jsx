import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout.styles.scss';

const Checkout = () => {
  const { cartItems, addItemToCart, revoveItemFromCart } =
    useContext(CartContext);

  return (
    <div className='checkout-container'>
      <div className='checkout-titles'>
        <div>Product</div>
        <div>Description</div>
        <div>Quantity</div>
        <div>Price</div>
        <div>Remove</div>
      </div>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span onClick={() => revoveItemFromCart(cartItem)}>
                decrement{' '}
              </span>
              <span>{quantity}</span>
              <span onClick={() => addItemToCart(cartItem)}> increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
