import Provider from "@/redux/provider";
import useLoginDataByRefreshToken from "./auth/helper/useLoginDataByRefreshToken";

const AutoLogin = async ({ children }: { children: React.ReactNode }) => {
  const { loginResponse } = await useLoginDataByRefreshToken();
  return <Provider loginResponse={loginResponse}>{children}</Provider>;
};

export default AutoLogin;
