import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bags: {},
};

const cartSlice = createSlice({
  name: "bags",
  initialState,
  reducers: {
    addBagIdText: (state, action) => {
      state.bags[action.payload.labelText] = action.payload;
      //   label text is used as id
    },
    removeBag: (state, action) => {
      delete state.bags[action.payload];
    },
  },
});

export const ShoppingCartReducer = cartSlice.reducer;
export const { addBagIdText, removeBag } = cartSlice.actions;
export const getBags = (state) => state.bags.bags;
