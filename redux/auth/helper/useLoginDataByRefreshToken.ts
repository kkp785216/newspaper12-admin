import { cookies } from "next/dist/client/components/headers";
import { REFRESH_TOKEN_COOKIE_VAR_NAME } from "@/utils/manageCookie";
import { LoginResponse } from "@/types/Auth_APIs_Types";
import api_endpoints from "@/lib/ApiEndpoints";
import { authClient } from "@/network/authHttpClient";

const useLoginDataByRefreshToken = async () => {
  /** Auto Login using Refresh Token */
  const cookie = cookies();
  const refreshToken = cookie.get(REFRESH_TOKEN_COOKIE_VAR_NAME);
  let loginResponse: LoginResponse | null = null;
  if (refreshToken) {
    try {
      const url = api_endpoints.AUTH_REFRESH_TOKEN_API;
      const loginApiCall = await authClient.post<LoginResponse>(url, {
        refreshToken: refreshToken.value,
        cache: "no-store",
      });
      loginResponse = loginApiCall;
    } catch (error) {
      /** */
    }
  }
  return { loginResponse };
};

export default useLoginDataByRefreshToken;
