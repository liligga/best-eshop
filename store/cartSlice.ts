import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";
import { Product, CartItemType } from '@/types/products'
import type { PayloadAction } from '@reduxjs/toolkit'


// Type for our state
export interface CartState {
  cartState: CartItemType[];
  numOfProducts: number;
}

// Initial state
const initialState: CartState = {
  cartState: [],
  numOfProducts: 0,
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
        state.numOfProducts += 1;
      } else {
        // if found
        const ind = state.cartState.findIndex( p => p.product.id === action.payload.product.id)
        console.log(ind);
        
        state.cartState.splice(ind, 1, action.payload)
        // state.cartState = [
        //   ...state.cartState.filter( p => p.product.id !== action.payload.product.id),
        //   action.payload
        // ]

      }
      localStorage.setItem("cartProducts", JSON.stringify(state.cartState));
    }


  },
});

export const { addToCart } = cartSlice.actions;

export const selectCartState = (state: AppState) => state.cart.cartState;
export const selectNumberOfProducts = (state: AppState) => state.cart.numOfProducts;

export default cartSlice.reducer;