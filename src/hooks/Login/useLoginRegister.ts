import { useCallback, useState } from "react";
import { login, register } from "../../actions/Login/login";

interface Output {
  handleSubmit: () => void;
  handleRegister: () => void;
  handleUserChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  user: string;
  password: string;
}

export const useLoginRegister = (
  setToken: (value: string | null) => void
): Output => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = useCallback(() => {
    login({ username: user, password }, setError).then((token) => {
      if (token) {
        setToken(token);
      }
    });
  }, [user, password, setError, setToken]);

  const handleRegister = useCallback(() => {
    register({ username: user, password }, setError);
  }, [user, password, setError]);

  const handleUserChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUser(e.target.value);
    },
    [setUser]
  );
  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    [setPassword]
  );
  return {
    handleSubmit,
    handleRegister,
    handleUserChange,
    handlePasswordChange,
    error,
    user,
    password,
  };
};
