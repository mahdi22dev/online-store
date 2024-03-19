import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isSerachModalOpen: false,
    isNavbarOpen: false,
    isBoxchecked: false,
    isResourceOpen: true,
  },
  reducers: {
    toggleSerchModal: (state) => {
      state.isSerachModalOpen = !state.isSerachModalOpen;
    },
    closeSerchModal: (state) => {
      state.isSerachModalOpen = false;
    },
    navbarToggle: (state) => {
      state.isNavbarOpen = !state.isNavbarOpen;
    },
    closeNavbar: (state) => {
      state.isNavbarOpen = false;
    },
    isBoxcheckedToggle: (state) => {
      state.isBoxchecked = !state.isBoxchecked;
    },
    closeisBoxchecked: (state) => {
      state.isBoxchecked = false;
    },
    openisResourceOpen: (state) => {
      state.isResourceOpen = true;
    },
    closeisResourceOpen: (state) => {
      state.isResourceOpen = false;
    },
  },
});

export const {
  toggleSerchModal,
  closeSerchModal,
  navbarToggle,
  closeNavbar,
  isBoxcheckedToggle,
  closeisBoxchecked,
  openisResourceOpen,
  closeisResourceOpen,
} = userSlice.actions;

export default userSlice.reducer;
