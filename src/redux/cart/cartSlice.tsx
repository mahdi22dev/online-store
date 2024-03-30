import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    CartDataUpdate: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { CartDataUpdate } = cartSlice.actions;

export default cartSlice.reducer;
