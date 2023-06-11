import { selectAuth } from "@/redux/auth/selectors";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { removeAccessToken } from "@/redux/auth/slice";

const Logout = () => {
  const accessToken = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    void dispatch(removeAccessToken());
  };
  if (!accessToken) return null;
  return (
    <div className="hover:text-[var(--color-active2)]" onClick={handleLogout}>
      Logout
    </div>
  );
};

export default Logout;
