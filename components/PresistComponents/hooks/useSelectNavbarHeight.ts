import { useAppSelector } from "redux/hooks";
import { getNavbarHeight } from "redux/ui/selectors";

const useSelectNavbarHeight = () => {
  const navbarHeight = useAppSelector(getNavbarHeight);
  const styleMain = {
    minHeight: `calc(100vh - ${navbarHeight}px)`,
    width: "calc(100% - 180px)",
  };
  return { styleMain };
};

export default useSelectNavbarHeight;
