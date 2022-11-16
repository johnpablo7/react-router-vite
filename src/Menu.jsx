import { NavLink } from "react-router-dom";
import { routes } from "./routes/routes";

export const Menu = () => {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li key={route.path}>
            <NavLink
              style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
              to={route.path}
              end
            >
              {route.text}
            </NavLink>
          </li>
        ))}

        {/* <li>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
            to="/blog"
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
            to="/profile"
          >
            Profile
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
};
