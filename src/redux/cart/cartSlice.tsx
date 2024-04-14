import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductICartitemstype, cartType } from "@/lib/types";

// interface cartStateType {
//   byID: {
//     id: string;
//   };
//   items: cartType[];
// }
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
      if (action.payload) {
        const sortedData = action.payload?.ProductItems?.slice().sort(
          (a, b) => {
            if (a.productId < b.productId) return -1;
            if (a.productId > b.productId) return 1;
            return 0;
          }
        );

        state.cart = { ...action.payload, ProductItems: sortedData };
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
