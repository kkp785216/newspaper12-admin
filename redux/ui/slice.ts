import {
  ActionCreatorWithPayload,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

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

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers(builder) {
    builder // thunk fulfill/reject logic is handled within the thunk, as logic is reusable
      .addCase(
        HYDRATE as unknown as ActionCreatorWithPayload<{
          [SLICE_NAME]: UIControls;
        }>,
        (state, action) => {
          return {
            ...state,
            ...action.payload[SLICE_NAME],
          };
        }
      );
  },
});

export const { setNavbarHeight } = uiSlice.actions;

export default uiSlice.reducer;
