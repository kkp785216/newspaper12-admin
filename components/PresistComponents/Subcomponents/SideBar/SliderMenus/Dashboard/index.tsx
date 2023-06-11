import React from "react";
import IconDashboard from "./assets/IconDashboard";
import SliderMenu from "../Subcomponents/SliderMenu";
import { usePathname } from "next/navigation";

const Dashboard = () => {
  const pathname = usePathname();
  return (
    <SliderMenu
      active={pathname === "/"}
      href="/"
      title="Dashboard"
      MenuImage={IconDashboard}
    />
  );
};

export default Dashboard;
