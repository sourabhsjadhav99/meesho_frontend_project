// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   items: [],
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       state.items.push(action.payload);
//     },
//     removeFromCart: (state, action) => {
//       state.items = state.items.filter(item => item.id !== action.payload);
//     },
//   },
// });

// export const { addToCart, removeFromCart } = cartSlice.actions;

// export default cartSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   items: [],
// };

// const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const existingItem = state.items.find(item => item.id === action.payload.id);
//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         state.items.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     removeFromCart: (state, action) => {
//       state.items = state.items.filter(item => item.id !== action.payload);
//     },
//     increaseQuantity: (state, action) => {
//       const item = state.items.find(item => item.id === action.payload);
//       if (item) {
//         item.quantity += 1;
//       }
//     },
//     decreaseQuantity: (state, action) => {
//       const item = state.items.find(item => item.id === action.payload);
//       if (item && item.quantity > 1) {
//         item.quantity -= 1;
//       }
//     },
//     clearCart: (state) => {
//       state.items = [];
//     }
//   },
// });

// export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;


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
      if (itemExists) {
        alert('Item already in cart');
      } else {
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

