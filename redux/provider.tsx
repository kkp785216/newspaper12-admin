"use client";

import { setAuth } from "./auth/slice";
import { store } from "./store";
import { Provider } from "react-redux";

export default function Providers({ children }: { children: React.ReactNode }) {
  store.dispatch(setAuth("hello"));
  return <Provider store={store}>{children}</Provider>;
}
