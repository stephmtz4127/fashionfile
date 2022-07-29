import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: {},
  user: {},
  loggedIn: false,
  addresses: {},
  paymentOption: {},
  newsletterBlog: {},
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users[action.payload.id] = action.payload;
    },
    Login: (state, action) => {
      state.user = action.payload;
      state.loggedIn = true;
    },
    Logout: (state, action) => {
      state.user = action.payload;
      state.loggedIn = false;
    },
    updatePass: (state, action) => {
      state.users[action.payload.id].password = action.payload.password;
    },
    addAddress: (state, action) => {
      state.addresses[action.payload.id] = action.payload;
    },
    editAddress: (state, action) => {
      state.addresses[action.payload.id] = action.payload;
    },
    deleteAddress: (state, action) => {
      const results = Object.values(state.addresses).filter((address) => {
        return address.id === action.payload.id;
      });

      results.forEach((address) => {
        delete state.addresses[address.id];
      });
    },
    deleteALLAddress: (state) => {
      const results = Object.values(state.addresses).filter((address) => {
        return address.id;
      });

      results.forEach((address) => {
        delete state.addresses[address.id];
      });
    },
    addPaymentOption: (state, action) => {
      state.paymentOption = action.payload;
    },
    newsletterBlogOption: (state, action) => {
      state.newsletterBlog = action.payload;
    },
  },
});

export const UserReducer = userSlice.reducer;
export const {
  addUser,
  Login,
  Logout,
  updatePass,
  addAddress,
  editAddress,
  deleteAddress,
  deleteALLAddress,
  addPaymentOption,
  newsletterBlogOption,
} = userSlice.actions;
export const getUsers = (state) => state.users.users;
export const getUser = (state) => state.users.user;
export const getLoggedIn = (state) => state.users.loggedIn;
export const getAddresses = (state) => state.users.addresses;
// actions change data, selectors retreive data
