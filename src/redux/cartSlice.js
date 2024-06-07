
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  buyNowItem: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.items.find(item => item.id === action.payload.id);
      if (!itemExists) {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    buyNow: (state, action) => {
        state.buyNowItem.push({ ...action.payload, quantity: 1 });
      
    },
    increaseBuyQuantity: (state, action) => {
      const item = state.buyNowItem.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseBuyQuantity: (state, action) => {
      const item = state.buyNowItem.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, buyNow, increaseBuyQuantity, decreaseBuyQuantity } = cartSlice.actions;

export default cartSlice.reducer;

