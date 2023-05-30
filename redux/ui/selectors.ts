import { AppState } from "@/redux/store";

const getNavbarHeight = (state: AppState) => state.ui.navbarHeight;

export { getNavbarHeight };
