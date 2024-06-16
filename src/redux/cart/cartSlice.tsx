import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Cart, ProductItem } from "@prisma/client";

type CartType = Cart & {
  ProductItem?: ProductItem[];
};
interface CartState {
  cart: CartType;
  refetchCart: boolean;
  cartfetchloading: boolean;
}
const initialState: CartState = {
  cart: { id: "", userId: "", createdAt: new Date() },
  refetchCart: false,
  cartfetchloading: true,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    CartDataUpdate: (state, action: PayloadAction<CartType>) => {
      if (action.payload) {
        const sortedData = action.payload?.ProductItem?.slice().sort((a, b) => {
          if (a.productId < b.productId) return -1;
          if (a.productId > b.productId) return 1;
          return 0;
        });

        state.cart = { ...action.payload, ProductItem: sortedData };
      }
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
