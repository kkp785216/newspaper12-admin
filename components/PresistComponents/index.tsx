"use client";

import Header from "./Subcomponents/Navbar";
import Footer from "./Subcomponents/Footer";
import Sidebar from "./Subcomponents/SideBar";
import { useAppSelector } from "@/redux/hooks";
import LoginScreen from "@/components/Auth/Login";
import useSelectNavbarHeight from "./hooks/useSelectNavbarHeight";

type Props = {
  children: React.ReactNode;
};

const PresistComponents = ({ children }: Props) => {
  const { accessToken } = useAppSelector((state) => state.auth);
  const { styleMain } = useSelectNavbarHeight();

  return (
    <>
      {accessToken ? (
        // serve dashboard if admin logedin
        <div className="min-h-screen">
          <Header />
          <Sidebar />
          <main
            className="flex-1 ml-auto flex flex-col justify-between p-5 pb-0 bg-[var(--bg-secondary)]"
            style={styleMain}
          >
            <div>{children}</div>
            <Footer />
          </main>
        </div>
      ) : (
        // serve login screen if admin not logedin
        <LoginScreen />
      )}
    </>
  );
};

export default PresistComponents;
