import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./auth";

export const LoginPage = () => {
  const auth = useAuth();
  const [username, setUsername] = useState("");

  const login = (e) => {
    e.preventDefault();
    auth.login({ username });
    // console.log(username);
  };

  // Este componente nos ayuda a que si estamos logeados y pongamos login en la url no nos la muestre si no que nos mande a profile
  if (auth.user) {
    return <Navigate to="/profile" />;
  }

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
