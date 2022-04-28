import axios from "axios";
import { ENVVARS } from "../../../envvars";

interface LoginPayload {
  token: string;
}

export interface Credentials {
  user: string;
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
    .post<LoginPayload>(ENVVARS.BACKEND_API + "/login", credentials)
    .then((res) => {
      storeToken(res.data.token);
    })
    .catch((error) => {
      setError(true);
    });
};

export const logout = async (): Promise<void> => {
  const token = getToken();
  await axios
    .post<LoginPayload>(ENVVARS.BACKEND_API + "/logout", token)
    .then((res) => {
      eraseToken();
    })
    .catch((error) => {
      return { token: "ERROR" };
    });
};
