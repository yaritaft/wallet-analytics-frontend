import { useCallback } from "react";
import { logout } from "../../actions/Login/login";

interface Properties {
  setToken: (value: string | null) => void;
}

export const Logout = ({ setToken }: Properties) => {
  const handleLogout = useCallback(
    async () => await logout().then(() => setToken(null)),
    [setToken]
  );
  return (
    <button className="logout" onClick={handleLogout}>
      Logout
    </button>
  );
};
