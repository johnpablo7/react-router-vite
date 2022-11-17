import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";
import { routes } from "./routes/routes";

export const Menu = () => {
  const auth = useAuth();

  return (
    <nav>
      <ul>
        {routes.map((route) => {
          if (route.publicOnly && auth.user) return null;
          if (route.private && !auth.user) return null;

          return (
            <li key={route.path}>
              <NavLink
                style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
                to={route.path}
                end
              >
                {route.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
