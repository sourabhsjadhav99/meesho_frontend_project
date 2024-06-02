

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDataFromApi } from '../utils/api';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (categories) => {
  if (categories.length === 0) {
    const response = await fetchDataFromApi(`/products`);
    return response.products;
  } else {
    const responses = await Promise.all(categories.map((category) => fetchDataFromApi(`/products/category/${category}`)));

    const products = responses.flatMap((res) => res.products);
    console.log(products)
    return products;
  }
});

const productSlice = createSlice({
  name: 'products',
  initialState: {
    data: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default productSlice.reducer;




//--

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { fetchDataFromApi } from '../utils/api';
// export const fetchProducts = createAsyncThunk('products/fetchProducts', async (categories=[], sortOption="") => {
//   let response
//   if (categories.length === 0) {
//     const responses = await fetchDataFromApi(`/products`);
//    response= responses.products;
//   } else {
//     const responses = await Promise.all(categories.map((category) => fetchDataFromApi(`/products/category/${category}`)));

//     response = responses.flatMap((res) => res.products);
   
//   }

//    return response.sort((a,b)=>a.price-b.price)
//   //  return response

// });

// const productSlice = createSlice({
//   name: 'products',
//   initialState: {
//     data: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.data = action.payload;
//         state.loading = false;
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default productSlice.reducer;
//----
// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { fetchDataFromApi } from '../utils/api';

// export const fetchProducts = createAsyncThunk('products/fetchProducts', async ({ categories = [], sort = '' }, { rejectWithValue }) => {
//   try {
//     let response;
//     if (categories.length === 0) {
//       response = await fetchDataFromApi(`/products`);
//     } else {
//       const responses = await Promise.all(categories.map((category) => fetchDataFromApi(`/products/category/${category}`)));
//       response = { products: responses.flatMap((res) => res.products) };
//     }

//     let products = response.products;

//     if (sort === 'New Arrival') {
//       products = products.sort((a, b) => new Date(b.meta.createdAt) - new Date(a.meta.createdAt));
//     } else if (sort === 'Price (High to low)') {
//       products = products.sort((a, b) => b.price - a.price);
//     } else if (sort === 'Price (Low to high)') {
//       products = products.sort((a, b) => a.price - b.price);
//     } else if (sort === 'Ratings') {
//       products = products.sort((a, b) => b.rating - a.rating);
//     } else if (sort === 'Discount') {
//       products = products.sort((a, b) => b.discountPercentage - a.discountPercentage);
//     }

//     return products;
//   } catch (error) {
//     return rejectWithValue(error.message);
//   }
// });

// const productSlice = createSlice({
//   name: 'products',
//   initialState: {
//     data: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.data = action.payload;
//         state.loading = false;
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default productSlice.reducer;
