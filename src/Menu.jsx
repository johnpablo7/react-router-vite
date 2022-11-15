import { NavLink } from "react-router-dom";
import { routes } from "./routes/routes";

export const Menu = () => {
  return (
    <nav>
      <ul>
        {routes.map((route) => (
          <li key={route.id}>
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
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li> */}

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
