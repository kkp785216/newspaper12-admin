import React from "react";
import Logo from "./NavbarLeft/Logo/Logo";
import Profile from "./NavbarRight/Profile";
import Logout from "./NavbarRight/Logout";

const NavbarContent = () => {
  return (
    <div className="flex justify-between items-center p-3">
      <div>
        <Logo />
      </div>
      <div className="flex space-x-3">
        <Profile />
        <Logout />
      </div>
    </div>
  );
};

export default NavbarContent;
