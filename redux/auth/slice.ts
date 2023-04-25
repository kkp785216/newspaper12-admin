import {
  ActionCreatorWithPayload,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const SLICE_NAME = "auth";

// Type for our state
export interface AuthState {
  accessToken: string | null;
}

// Initial state
const initialState: AuthState = {
  accessToken: null,
};

// Actual Slice
export const authSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    // Action to set the authentication status
    setAuth(state, action: PayloadAction<AuthState["accessToken"]>) {
      state.accessToken = action.payload;
    },
  },

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers(builder) {
    builder // thunk fulfill/reject logic is handled within the thunk, as logic is reusable
      .addCase(
        HYDRATE as unknown as ActionCreatorWithPayload<{
          [SLICE_NAME]: AuthState;
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

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
