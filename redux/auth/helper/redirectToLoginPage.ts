import { AppStore } from "@/redux/store";

const redirectToLoginPage = (store: AppStore) => {
  const accessToken = store.getState().auth.accessToken;
  if (!accessToken) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }
};

export { redirectToLoginPage };
