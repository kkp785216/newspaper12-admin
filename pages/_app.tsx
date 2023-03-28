import "styles/globals.css";
import type { AppProps } from "next/app";
import { wrapper } from "redux/store";
import { Provider } from "react-redux";
import { setAuth } from "redux/auth/authSlice";

const App = ({ Component, ...rest }: AppProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
      <Component {...props.pageProps} />
    </Provider>
  );
};

export default App;

App.getInitialProps = wrapper.getInitialAppProps((store) => async () => {
  const myPromise = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved after 1 second");
    }, 0);
  });

  store.dispatch(setAuth("hello this is krishna"));

  /* Handle data */
  return {
    pageProps: {},
  };
});
