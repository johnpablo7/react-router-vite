import React, { createContext, useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { userlist } from "./userlist";

// const adminList = ["juan", "freddy", "oscar"];

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  // Arreglo de userlist.js
  const userRole = (username) => {
    const user = userlist.find((item) => username === item.name);
    if (user) return user.role;
    return {
      admin: false,
      editor: false,
      client: true,
    };
  };

  const login = ({ username }) => {
    const autorization = userRole(username);
    setUser({ username, autorization });
    navigate("/profile");
  };

  const logout = () => {
    setUser(null);
    navigate("/");
  };

  const auth = { user, login, logout };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

// Autenticacion de proteccion de Rutas: si no estamos legados nos redirige al login
const AuthRoute = (props) => {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" />;
  }

  return props.children;
};

export { AuthProvider, useAuth, AuthRoute };
