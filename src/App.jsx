import { HashRouter, useRoutes } from "react-router-dom";
import { AuthProvider } from "./auth";
import { Menu } from "./Menu";
import { routes } from "./routes/routes";

// /#/HomePage

const Router = () => {
  const elements = useRoutes(routes);
  return elements;
};

export const App = () => {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />
          <Router />
        </AuthProvider>
      </HashRouter>
    </>
  );
};
