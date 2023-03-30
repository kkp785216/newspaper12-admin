import NavbarContent from "./Subcomponents";

const NAVBAR_ID = "navbar";

const Navbar = () => {
  return (
    <header
      id={NAVBAR_ID}
      className="sticky top-0 z-20 text-[var(--color-primary)] bg-[var(--bg-primary)]"
    >
      <NavbarContent />
    </header>
  );
};

/**
 * @returns Navbar element height as a number
 */
function getNavbarHeight() {
  if (typeof window !== "undefined") {
    const el = document.getElementById(NAVBAR_ID);
    const height = el?.getBoundingClientRect().height || 0;
    return height;
  } else {
    return 0;
  }
}

export { getNavbarHeight };
export default Navbar;
