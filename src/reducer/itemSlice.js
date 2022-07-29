import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
};

const itemSlice = createSlice({
  name: "favoriteBags",
  initialState,
  reducers: {
    addFavoriteItem: (state, action) => {
      state.items[action.payload.labelText] = action.payload;
    },
    removeFavoriteItem: (state, action) => {
      delete state.items[action.payload];
    },
  },
});

export const MyItemsReducer = itemSlice.reducer;
export const { addFavoriteItem, removeFavoriteItem } = itemSlice.actions;
export const getItems = (state) => state.favoriteBags.items;
