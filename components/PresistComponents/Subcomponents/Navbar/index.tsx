"use client";

import NavbarContent from "./Subcomponents";
import useNavbarHeightUpdater from "./hooks/useNavbarHeightUpdater";

const Navbar = () => {
  /* The useNavbarHeightUpdater hook is used to update the height of the navbar in the Redux store's UI slice. This height value is useful for components that rely on the navbar height */
  const navbarRef = useNavbarHeightUpdater();

  return (
    <header
      ref={navbarRef}
      className="sticky top-0 z-20 text-[var(--color-primary)] bg-[var(--bg-primary)]"
    >
      <NavbarContent />
    </header>
  );
};

export default Navbar;
