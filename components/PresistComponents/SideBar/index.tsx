import { useEffect, useState } from "react";
import { getNavbarHeight } from "../Navbar";
import Dashboard from "./SliderMenus/Dashboard";
import Posts from "./SliderMenus/Posts";

const Sidebar = () => {
  const [topPadding, setTopPadding] = useState({ paddingTop: "0px" });

  // setting it via effect avoids hydration issues
  useEffect(() => {
    updateTopPadding();
    window.addEventListener("resize", updateTopPadding);
    return () => window.removeEventListener("resize", updateTopPadding);
  }, []);

  /**
   * @returns sidebar padding top style -> (100vh - navbar height)px
   */
  function updateTopPadding() {
    const paddingTop = `${getNavbarHeight()}px`;
    setTopPadding({ paddingTop });
  }
  return (
    <aside
      style={topPadding}
      className="text-[var(--color-primary)] bg-[var(--bg-primary)] fixed left-0  top-0 w-[180px] min-h-screen"
    >
      <div className="py-3">
        <Dashboard />
        <Posts />
      </div>
    </aside>
  );
};

export default Sidebar;
