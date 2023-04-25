import { useAppDispatch } from "redux/hooks";
import { useRef, useEffect, useState, useCallback } from "react";
import { setNavbarHeight } from "redux/ui/slice";

function useNavbarHeightUpdater() {
  const globalDispatch = useAppDispatch();
  const navbarRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const updateNavbarHeight = useCallback(() => {
    const el = navbarRef.current;
    const navbarHeight = el?.getBoundingClientRect().height;
    navbarHeight !== undefined && setHeight(navbarHeight);
  }, []);

  useEffect(() => {
    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);
    return () => window.removeEventListener("resize", updateNavbarHeight);
  }, [updateNavbarHeight]);

  useEffect(() => {
    globalDispatch(setNavbarHeight(height));
  }, [globalDispatch, height]);

  return navbarRef;
}

export default useNavbarHeightUpdater;
