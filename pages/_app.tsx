import "styles/globals.css";
import "styles/utility.css";
import type { AppProps } from "next/app";
import { wrapper } from "redux/store";
import { Provider } from "react-redux";
import { setAuth } from "redux/auth/slice";
import PresistComponents from "components/PresistComponents";
import { useEffect } from "react";

const App = ({ Component, ...rest }: AppProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { store, props } = wrapper.useWrappedStore(rest);

  // perform auto login
  useEffect(() => {
    store.dispatch(setAuth("hello this is krishna"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Provider store={store}>
      <PresistComponents>
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-member-access */}
        <Component {...props.pageProps} />
      </PresistComponents>
    </Provider>
  );
};

export default App;

// App.getInitialProps = wrapper.getInitialAppProps((store) => async () => {
//   const myPromise = await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Promise resolved after 1 second");
//     }, 0);
//   });

//   store.dispatch(setAuth("hello this is krishna"));

//   /* Handle data */
//   return {
//     pageProps: {},
//   };
// });
