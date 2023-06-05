"use client";

import { LoginResponse } from "@/types/Auth_APIs_Types";
import { store } from "./store";
import { Provider } from "react-redux";
import useAutoLoginByLoginData from "./auth/helper/useAutoLoginByLoginData";

export default function Providers({
  children,
  loginResponse,
}: {
  children: React.ReactNode;
  loginResponse: LoginResponse | null;
}) {
  /** Auto Login using Refresh Token */
  useAutoLoginByLoginData(loginResponse, store);
  return <Provider store={store}>{children}</Provider>;
}
