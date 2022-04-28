import { logout } from "../../actions/Login/login";

const handleLogout = async () => await logout();

export const Logout = () => <button onClick={handleLogout}>Logout</button>;
