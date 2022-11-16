import { useState } from "react";
import { useAuth } from "./auth";

export const LoginPage = () => {
  const auth = useAuth();
  const [username, setUsername] = useState("");

  const login = (e) => {
    e.preventDefault();
    // console.log(username);
    auth.login({ username });
  };

  return (
    <>
      <h1>Login Page</h1>

      <form onSubmit={login} action="">
        <label htmlFor="">Escribe tu nombre de usuario:</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        />

        <button type="submit">Entrar</button>
      </form>
    </>
  );
};
