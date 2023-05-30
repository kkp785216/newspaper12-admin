import { AppState } from "@/redux/store";

const selectAuth = (state: AppState) => state.auth.accessToken;

export { selectAuth };
