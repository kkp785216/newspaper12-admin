import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
});

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
