import { AppStore } from "@/redux/store";
import { LoginResponse } from "@type/Auth_APIs_Types";
import { setAccessTokenServerSide } from "../slice";

const useAutoLoginByLoginData = (
  loginResponse: LoginResponse | null,
  store: AppStore
) => {
  if (loginResponse) {
    void store.dispatch(setAccessTokenServerSide(loginResponse.token));
  }
};

export default useAutoLoginByLoginData;
