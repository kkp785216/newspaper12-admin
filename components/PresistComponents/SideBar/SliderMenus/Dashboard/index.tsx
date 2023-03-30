import React from "react";
import IconDashboard from "./assets/IconDashboard";
import SliderMenu from "../Subcomponents/SliderMenu";
import { useRouter } from "next/router";

const Dashboard = () => {
  // router.route
  const { route } = useRouter();
  return (
    <SliderMenu
      active={route === "/"}
      href="/"
      title="Dashboard"
      MenuImage={IconDashboard}
    />
  );
};

export default Dashboard;
