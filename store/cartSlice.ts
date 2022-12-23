import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { HYDRATE } from "next-redux-wrapper";
import { Product, CartItemType } from '@/types/products'


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
        state.cartState.splice(ind, 1, action.payload)

      }
      localStorage.setItem("cartProducts", JSON.stringify(state.cartState));
    },

    removeFromCart: (state, action) => {
      if(state.cartState.find((p: CartItemType) => p.product.id == action.payload) !== undefined ) {
        // if product found

        const ind = state.cartState.findIndex( p => p.product.id === action.payload)
        state.cartState.splice(ind, 1)
        state.numOfProducts -= 1;
      }
    }


  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCartState = (state: AppState) => state.cart.cartState;
export const selectNumberOfProducts = (state: AppState) => state.cart.numOfProducts;

export default cartSlice.reducer;