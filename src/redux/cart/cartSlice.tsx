import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {},
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
