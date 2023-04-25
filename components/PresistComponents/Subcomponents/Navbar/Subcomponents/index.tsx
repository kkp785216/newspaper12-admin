import React from "react";
import Logo from "./NavbarLeft/Logo/Logo";
import Profile from "./NavbarRight/Profile";

const NavbarContent = () => {
  return (
    <div className="flex justify-between items-center p-3">
      <div>
        <Logo />
      </div>
      <div>
        <Profile />
      </div>
    </div>
  );
};

export default NavbarContent;
