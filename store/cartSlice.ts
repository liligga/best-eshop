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
    addToCart: (state, action) => {
      // console.log("Payload:", action.payload);
      
      if(state.cartState.find((p: CartItemType) => p.product.id == action.payload.product.id) == undefined ) {
        // if not found
        
        state.cartState = [...state.cartState, action.payload];
      } else {
        // if found
        state.cartState = [
          ...state.cartState.filter( p => p.product.id !== action.payload.product.id),
          action.payload
        ]

        // state.cartState.map((item: CartItemType) => {
        //   if (item.product.id !== action.payload.product.id) {
            
        //     return item
        //   }
      
        //   // Otherwise, this is the one we want - return an updated value
        //   console.log(action.payload);
          
        //   return {
        //     ...item,
        //     ...action.payload
        //   }
        // })
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