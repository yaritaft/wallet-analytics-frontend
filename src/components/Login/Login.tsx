import { useLoginRegister } from "../../hooks/Login/useLoginRegister";
import "./Login.css";

interface Properties {
  setToken: (value: string | null) => void;
}

export const Login = ({ setToken }: Properties) => {
  const {
    error,
    handleUserChange,
    handlePasswordChange,
    handleRegister,
    handleSubmit,
    user,
    password,
  } = useLoginRegister(setToken);
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
