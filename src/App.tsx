import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Login } from "./components/Login/Login";
import { getToken } from "./actions/Login/login";
import { WalletMenu } from "./pages/WalletMenu/WalletMenu";

function App() {
  const [token, setToken] = useState(getToken());
  return (
    <div className="App">
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <WalletMenu setToken={setToken} />
      )}
    </div>
  );
}

export default App;
