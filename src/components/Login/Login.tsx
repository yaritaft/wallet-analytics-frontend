import { useCallback, useState } from "react";
import { Credentials, login, register } from "../../actions/Login/login";
import "./Login.css";

interface Properties {
  setToken: (value: string | null) => void;
}

export const Login = ({ setToken }: Properties) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = useCallback(() => {
    login({ username: user, password }, setError).then((token) => {
      if (token) {
        setToken(token);
      }
    });

    // TODO: REDIRECT TO WALLETS LANDING PAGE
  }, [user, password, setError]);

  const handleRegister = useCallback(() => {
    register({ username: user, password }, setError);
    // TODO: REDIRECT TO WALLETS LANDING PAGE
  }, [user, password, setError]);

  const handleUserChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUser(e.target.value);
    },
    [user]
  );
  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    [password]
  );
  return (
    <div className="login">
      <div className="form">
        <div className="header">Menu</div>
        {error && (
          <div className="error-message">Invalid credentials were sent</div>
        )}
        <input type="text" value={user} onChange={handleUserChange}></input>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        ></input>
        <div style={{ display: "flex" }}>
          <button onClick={handleRegister}>Register</button>
          <button onClick={handleSubmit}>Log In</button>
        </div>
      </div>
    </div>
  );
};
