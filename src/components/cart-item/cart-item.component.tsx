import { FC } from 'react';
import { CartItem as TCartItem } from '../../store/cart/cart.types.js';
import { CartItemContainer, ItemDetails } from './cart-item.styles.jsx';

type CartItemProps = {
  cartItem: TCartItem
}

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span className='name'>{name}</span>
        <span className='price'>
          {quantity} X ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
