import React, { useEffect, useState } from "react";
import Header from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./SideBar";
import { getNavbarHeight } from "./Navbar";
import { useAppSelector } from "redux/hooks";
import LoginScreen from "components/Auth/Login";

type Props = {
  children: React.ReactNode;
};

const PresistComponents = ({ children }: Props) => {
  const { accessToken } = useAppSelector((state) => state.auth);

  const [styleMain, setStyleMain] = useState({
    minHeight: "calc(100vh - 0px)",
    width: "calc(100% - 180px)",
  });

  useEffect(() => {
    updateMinHeight();
    window.addEventListener("resize", updateMinHeight);
    return () => window.removeEventListener("resize", updateMinHeight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getNavbarHeight()]);

  /**
   * @returns main min-height style -> (100vh - navbar height)px
   */
  function updateMinHeight() {
    const minHeight = `calc(100vh - ${getNavbarHeight()}px)`;
    setStyleMain({ ...styleMain, minHeight });
  }
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
