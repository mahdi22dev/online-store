import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { cartType } from "@/lib/types";

interface CartState {
  cart: cartType;
  refetchCart: boolean;
}
const initialState: CartState = {
  cart: { id: "", userId: "", ProductItems: [] },
  refetchCart: false,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    CartDataUpdate: (state, action: PayloadAction<cartType>) => {
      state.cart = action.payload;
    },
    toggleCartRefetch: (state) => {
      state.refetchCart = !state.refetchCart;
    },
  },
});

export const { CartDataUpdate, toggleCartRefetch } = cartSlice.actions;

export default cartSlice.reducer;
