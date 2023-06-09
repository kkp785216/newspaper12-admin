import api_endpoints from "@/lib/ApiEndpoints";
import type { FormData } from "../types/FormData";
import { authClient } from "@/network/authHttpClient";
import { LoginResponse } from "@type/Auth_APIs_Types";

const loginApiCall = async (formData: FormData) => {
  const { email, password } = formData;
  const url = api_endpoints.AUTH_LOGIN_API;
  const res = await authClient.post<LoginResponse>(url, {
    email,
    password,
    cache: "no-store",
  });
  return res;
};

export { loginApiCall };
