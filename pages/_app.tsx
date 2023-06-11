import "styles/globals.css";
import "styles/utility.css";
import type { AppProps } from "next/app";
import { wrapper } from "redux/store";
import { Provider } from "react-redux";
import PresistComponents from "components/PresistComponents";
import { ToastContainer } from "react-toastify";
import getLoginDataByRefreshToken from "@/redux/auth/helper/useLoginDataByRefreshToken";
import useAutoLoginByLoginData from "@/redux/auth/helper/useAutoLoginByLoginData";
import { REFRESH_TOKEN_COOKIE_VAR_NAME } from "@/utils/manageCookie";

const App = ({ Component, ...rest }: AppProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <PresistComponents>
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
        <Component {...props.pageProps} />
        <ToastContainer autoClose={2000} />
      </PresistComponents>
    </Provider>
  );
};

export default App;

App.getInitialProps = wrapper.getInitialAppProps((store) => async (context) => {
  const { loginResponse } = await getLoginDataByRefreshToken(context);

  loginResponse &&
    (() => {
      context.ctx.res?.setHeader(
        "Set-Cookie",
        `${REFRESH_TOKEN_COOKIE_VAR_NAME}=${loginResponse.refreshToken}; Path=/`
      );
      useAutoLoginByLoginData(loginResponse, store);
    })();

  /* Handle data */
  return {
    pageProps: {},
  };
});
