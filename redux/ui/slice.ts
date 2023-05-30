import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const SLICE_NAME = "ui";

// Initial state
const initialState = {
  navbarHeight: 0,
};

type UIControls = typeof initialState;

// Actual Slice
export const uiSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    setNavbarHeight(state, action: PayloadAction<UIControls["navbarHeight"]>) {
      state.navbarHeight = action.payload;
    },
  },
});

export const { setNavbarHeight } = uiSlice.actions;

export default uiSlice.reducer;
