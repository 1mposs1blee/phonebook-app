import { createSlice } from '@reduxjs/toolkit';

const initialState = { filterValue: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.filterValue = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;

export const { changeFilter } = filterSlice.actions;

//Selectors

export const selectFilter = state => state.filter.filterValue;
