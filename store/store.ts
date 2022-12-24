import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { cartSlice } from "./cartSlice";
import { createWrapper } from "next-redux-wrapper";



const makeStore = () =>
  configureStore({
    // preloadedState: {
    //   cartState: cartItemsState || [],
    //   numOfProducts: numberOfProductsState || 0,
    //   totalSum: totalState || 0,
    // },
    reducer: {
      [cartSlice.name]: cartSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const store = makeStore()

// export const wrapper = createWrapper<AppStore>(makeStore);