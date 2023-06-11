import { REFRESH_TOKEN_COOKIE_VAR_NAME } from "@/utils/manageCookie";
import { LoginResponse } from "@type/Auth_APIs_Types";
import api_endpoints from "@/lib/ApiEndpoints";
import { authClient } from "@/network/authHttpClient";
import { AppContext } from "next/app";

const getLoginDataByRefreshToken = async (context: AppContext) => {
  // Extract the request object from the context
  const {
    ctx: { req },
  } = context;

  // Get the cookie header from the request headers
  const cookieHeader = req?.headers.cookie;

  // Parse the cookie header into an object
  const cookies: { [key: string]: string } = {};
  if (cookieHeader) {
    cookieHeader.split(";").forEach((cookie) => {
      const parts = cookie.split("=");
      cookies[parts[0].trim()] = decodeURIComponent(parts[1]);
    });
  }

  // You can access the cookie values using cookies.cookieName
  const refreshToken = cookies[REFRESH_TOKEN_COOKIE_VAR_NAME];
  let loginResponse: LoginResponse | null = null;
  if (refreshToken) {
    try {
      const url = api_endpoints.AUTH_REFRESH_TOKEN_API;
      const loginApiCall = await authClient.post<LoginResponse>(url, {
        refreshToken,
      });
      loginResponse = loginApiCall;
    } catch (error) {
      /** */
    }
  }
  return { loginResponse };
};

export default getLoginDataByRefreshToken;
