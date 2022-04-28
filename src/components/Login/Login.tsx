import { useCallback, useState } from "react";
import { Credentials, login } from "../../actions/Login/login";
import "./Login.css";

export const Login = () => {
  const [form, setForm] = useState<Credentials>({ user: "", password: "" });
  const [error, setError] = useState(false);
  const handleSubmit = useCallback(() => {
    login(form, setError);
  }, [form.user, form.password, setError]);

  const handleUserChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, user: e.target.value });
    },
    [form.user]
  );
  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm({ ...form, password: e.target.value });
    },
    [form.password]
  );
  return (
    <div className="login">
      <div className="form">
        <div className="header">Log In</div>
        {error && (
          <div className="error-message">Invalid credentials were sent</div>
        )}
        <input
          type="text"
          value={form.user}
          onChange={handleUserChange}
        ></input>
        <input
          type="password"
          value={form.password}
          onChange={handlePasswordChange}
        ></input>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};
