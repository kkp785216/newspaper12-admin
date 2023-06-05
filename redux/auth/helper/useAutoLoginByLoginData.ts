import { AppStore } from "@/redux/store";
import { LoginResponse } from "@/types/Auth_APIs_Types";
import { setAccessTokenServerSide } from "../slice";
import { REFRESH_TOKEN_COOKIE_VAR_NAME, setCookie } from "@/utils/manageCookie";

const useAutoLoginByLoginData = (
  loginResponse: LoginResponse | null,
  store: AppStore
) => {
  if (loginResponse) {
    void store.dispatch(setAccessTokenServerSide(loginResponse.token));
    if (typeof window !== "undefined")
      setCookie(
        REFRESH_TOKEN_COOKIE_VAR_NAME,
        loginResponse.refreshToken,
        loginResponse.expiry
      );
  }
};

export default useAutoLoginByLoginData;
