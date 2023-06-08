import Provider from "@/redux/provider";
import useLoginDataByRefreshToken from "./auth/helper/useLoginDataByRefreshToken";
import { adminClient } from "@/network/adminHttpClient";

const AutoLogin = async ({ children }: { children: React.ReactNode }) => {
  const { loginResponse } = await useLoginDataByRefreshToken();
  loginResponse && (adminClient.accessToken = loginResponse.token);
  return <Provider loginResponse={loginResponse}>{children}</Provider>;
};

export default AutoLogin;
