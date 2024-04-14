import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductICartitemstype, cartType } from "@/lib/types";

interface CartState {
  cart: cartType;
  refetchCart: boolean;
  cartfetchloading: boolean;
}
const initialState: CartState = {
  cart: { id: "", userId: "", ProductItems: [] },
  refetchCart: false,
  cartfetchloading: true,
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
    toggleCartLoading: (state) => {
      state.cartfetchloading = true;
    },
    untoggleCartLoading: (state) => {
      state.cartfetchloading = false;
    },
  },
});

export const {
  CartDataUpdate,
  toggleCartRefetch,
  toggleCartLoading,
  untoggleCartLoading,
} = cartSlice.actions;

export default cartSlice.reducer;
