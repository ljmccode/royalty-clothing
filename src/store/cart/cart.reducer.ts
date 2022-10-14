import { createReducer } from '@reduxjs/toolkit';
import { CartItem } from './cart.types';

import { setCartItems, setIsCartOpen } from './cart.actions';

export type CartState = {
  readonly isCartOpen: Boolean;
  readonly cartItems: CartItem[];
};

const initialState: CartState = {
  isCartOpen: false,
  cartItems: [],
};

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setIsCartOpen, (state, action) => {
      state.isCartOpen = action.payload;
    })
    .addCase(setCartItems, (state, action) => {
      state.cartItems = action.payload;
    });
});

export default cartReducer;
