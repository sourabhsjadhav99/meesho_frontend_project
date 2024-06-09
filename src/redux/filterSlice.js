import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCategories: [],
  selectedRatings: [],
  selectedPrices: [],
  sortOption: 'Relevance',  // Add any other initial states as needed
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    toggleCategory: (state, action) => {
      const category = action.payload;
      if (state.selectedCategories.includes(category)) {
        state.selectedCategories = state.selectedCategories.filter(c => c !== category);
      } else {
        state.selectedCategories.push(category);
      }
    },
    clearAllCategories: (state) => {
      state.selectedCategories = [];
      state.selectedRatings = [];
      state.selectedPrices = [];
    },
    setSortOption: (state, action) => {
      state.sortOption = action.payload;
    },
    toggleRatings: (state, action) => {
      const ratings = action.payload;
      if (state.selectedRatings.includes(ratings)) {
        state.selectedRatings = state.selectedRatings.filter(g => g !== ratings);
      } else {
        state.selectedRatings.push(ratings);
      }
    },
    togglePrices: (state, action) => {
      const prices = action.payload;
      console.log(prices)
      if (state.selectedPrices.includes(prices)) {
        state.selectedPrices = state.selectedPrices.filter(g => g !== prices);
      } else {
        state.selectedPrices.push(prices);
      }
    },
    setSearchQuery: (state, action) => {  // Add this reducer
      state.searchQuery = action.payload;
    },
    addMultipleCategories: (state, action) => {
      state.selectedCategories = action.payload;
    }
  },
});
// console.log(filterSlice.setSortOption)

export const { toggleCategory, clearAllCategories, setSortOption,  toggleRatings, togglePrices,setSearchQuery,addMultipleCategories } = filterSlice.actions;

export default filterSlice.reducer;

