import { AppStore } from "@/redux/store";
import { LoginResponse } from "@/types/Auth_APIs_Types";
import { setAccessTokenServerSide } from "../slice";
import { REFRESH_TOKEN_COOKIE_VAR_NAME, setCookie } from "@/utils/manageCookie";
import { adminClient } from "@/network/adminHttpClient";

const useAutoLoginByLoginData = (
  loginResponse: LoginResponse | null,
  store: AppStore
) => {
  if (loginResponse) {
    adminClient.accessToken = loginResponse.token;
    if (typeof window !== "undefined")
      setCookie(
        REFRESH_TOKEN_COOKIE_VAR_NAME,
        loginResponse.refreshToken,
        loginResponse.expiry
      );
    void store.dispatch(setAccessTokenServerSide(loginResponse.token));
  }
};

export default useAutoLoginByLoginData;
