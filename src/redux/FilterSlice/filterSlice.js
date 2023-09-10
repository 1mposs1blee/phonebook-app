import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: { filterValue: '' },
  reducers: {
    changeFilter(state, action) {
      state.filterValue = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { changeFilter } = filterSlice.actions;

//Selectors

export const getFilter = state => state.filter.filterValue;
