import { adminClient } from "@/network/adminHttpClient";
import {
  REFRESH_TOKEN_COOKIE_VAR_NAME,
  deleteCookie,
  setCookie,
} from "@/utils/manageCookie";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

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

/**
 * this function is a action which can used to login customer into app
 * @param accessToken login response tokem
 * @param refreshToken login resosponse refreshToken
 * @param expiry login response expiry
 * @returns a action to set accessToken and refreshToken into app on required place
 */
export const setAccessToken = (
  accessToken: string,
  refreshToken: string,
  expiry: number
) => {
  return createAsyncThunk(`${SLICE_NAME}/setAccessToken`, (_, { dispatch }) => {
    setCookie(REFRESH_TOKEN_COOKIE_VAR_NAME, refreshToken, expiry);
    adminClient.accessToken = accessToken;
    dispatch(setAuth(accessToken));
  })();
};

/**
 * this function is a action which can used to login customer into app on server side
 * @param accessToken login response tokem
 * @returns a action to set accessToken
 */
export const setAccessTokenServerSide = (accessToken: string) => {
  return createAsyncThunk(`${SLICE_NAME}/setAccessToken`, (_, { dispatch }) => {
    adminClient.accessToken = accessToken;
    dispatch(setAuth(accessToken));
  })();
};

/**
 * action for logut user
 */
export const removeAccessToken = createAsyncThunk(
  `${SLICE_NAME}/removeAccessToken`,
  (_, { dispatch }) => {
    deleteCookie(REFRESH_TOKEN_COOKIE_VAR_NAME);
    adminClient.accessToken = undefined;
    dispatch(setAuth(null));
  }
);

export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
