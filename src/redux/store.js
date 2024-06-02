

import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './filterSlice';
import productReducer from './productSlice';
import cartReducer from './cartSlice'

const store = configureStore({
  reducer: {
    filters: filterReducer,
    products: productReducer,
    cart: cartReducer
  },
});

export default store;