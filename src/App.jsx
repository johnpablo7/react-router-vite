import { HashRouter, Route, Routes, useRoutes } from "react-router-dom";
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
        <Menu />
        <Router />

        <Routes>
          <Route path="*" element={<p>Not Found</p>} />
        </Routes>
      </HashRouter>
    </>
  );
};
