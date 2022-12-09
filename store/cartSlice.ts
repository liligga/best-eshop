import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";
import { Product, CartItemType } from '@/types/products'
import type { PayloadAction } from '@reduxjs/toolkit'


// Type for our state
export interface CartState {
  cartState: CartItemType[];
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
    addToCart: (state, action: PayloadAction<CartItemType>) => {
      // state.cartState = [...state.cartState, action.payload]
      console.log(state.cartState);
      
      if(state.cartState.find((p: CartItemType) => p.product.id === action.payload.product.id) != undefined) {
        console.log("Not Found", action.payload);
        
        state.cartState = [...state.cartState, action.payload];
      } else {
        state.cartState.map((item: CartItemType) => {
          if (item.product.id !== action.payload.product.id) {
            // This isn't the item we care about - keep it as-is
            return item
          }
      
          // Otherwise, this is the one we want - return an updated value
          return {
            ...item,
            ...action.payload
          }
        })
      }

    }

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