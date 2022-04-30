import { logout } from "../../actions/Login/login";

interface Properties {
  setToken: (value: string | null) => void;
}

export const Logout = ({ setToken }: Properties) => {
  const handleLogout = async () => await logout().then(() => setToken(null));
  return <button onClick={handleLogout}>Logout</button>;
};
