import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { cartType } from "@/lib/types";

interface CartState {
  cart: cartType;
  refetchCart: boolean;
  reculcSummary: boolean;
}
const initialState: CartState = {
  cart: { id: "", userId: "", ProductItems: [] },
  refetchCart: false,
  reculcSummary: false,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    CartDataUpdate: (state, action: PayloadAction<cartType>) => {
      state.cart = action.payload;
      console.log("from cart slice:", state.cart);
    },
    toggleCartRefetch: (state) => {
      state.refetchCart = !state.refetchCart;
    },
    toggleSummaryCalcu: (state) => {
      state.reculcSummary = !state.reculcSummary;
    },
  },
});

export const { CartDataUpdate, toggleCartRefetch, toggleSummaryCalcu } =
  cartSlice.actions;

export default cartSlice.reducer;
