import axios from "axios";
import { ENVVARS } from "../../../envvars";

interface LoginPayload {
  token: string;
}

export interface Credentials {
  username: string;
  password: string;
}

export const storeToken = (token: string) => {
  localStorage.setItem("token", token);
};
export const eraseToken = () => {
  localStorage.removeItem("token");
};

export const getToken = (): string | null => {
  return localStorage.getItem("token");
};

export const login = async (
  credentials: Credentials,
  setError: (value: boolean) => void
): Promise<void> => {
  return await axios
    .post<string>(ENVVARS.BACKEND_API + "/login", credentials)
    .then((res) => {
      storeToken(res.data);
    })
    .catch((error) => {
      setError(true);
    });
};

export const register = async (
  credentials: Credentials,
  setError: (value: boolean) => void
): Promise<void> => {
  return await axios
    .post<string>(ENVVARS.BACKEND_API + "/register", credentials)
    .then((res) => {
      alert("Successfully registered.");
    })
    .catch((error) => {
      setError(true);
    });
};

export const logout = async (): Promise<void> => {
  const token = getToken();
  if (!token) {
    throw new Error("No token stored.");
  }
  await axios
    .patch<LoginPayload>(
      ENVVARS.BACKEND_API + "/logout",
      {},
      { headers: { token } }
    )
    .then((res) => {
      eraseToken();
    })
    .catch((error) => {
      return { token: "ERROR" };
    });
};
