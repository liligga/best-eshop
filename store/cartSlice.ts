import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";
import { Product, Category } from '@/types/products'
import type { PayloadAction } from '@reduxjs/toolkit'


// Type for our state
export interface CartState {
  cartState: Product[];
}

// Initial state
const initialState: CartState = {
  cartState: [],
};

// Actual Slice
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

    // Action to set the cart status
    addToCart: (state, action: PayloadAction<Product>) => {
      console.log(action.payload);
      state.cartState = [...state.cartState, action.payload];
      console.log(state.cartState);
      
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    // extraReducers: {
    //   [HYDRATE]: (state, action) => {
    //     return {
    //       ...state,
    //       ...action.payload.cart,
    //     };
    //   },
    // },

  },
});

export const { addToCart } = cartSlice.actions;

export const selectCartState = (state: AppState) => state.cart.cartState;

export default cartSlice.reducer;