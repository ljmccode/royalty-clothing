import { createReducer } from '@reduxjs/toolkit';

import { setCartItems, setIsCartOpen } from './cart.actions';

const initialState = {
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
