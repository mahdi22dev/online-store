import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { cartType } from "@/lib/types";

interface CartState {
  cart: cartType;
}
const initialState: CartState = {
  cart: { id: "", userId: "", ProductItems: [] },
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    CartDataUpdate: (state, action: PayloadAction<cartType>) => {
      state.cart = action.payload;
    },
  },
});

export const { CartDataUpdate } = cartSlice.actions;

export default cartSlice.reducer;
