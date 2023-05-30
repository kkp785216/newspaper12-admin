import Dashboard from "./SliderMenus/Dashboard";
import Posts from "./SliderMenus/Posts";
import { useAppSelector } from "@/redux/hooks";
import { getNavbarHeight } from "@/redux/ui/selectors";

const Sidebar = () => {
  const navbarHeight = useAppSelector(getNavbarHeight);

  return (
    <aside
      style={{ paddingTop: `${navbarHeight}px` }}
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
