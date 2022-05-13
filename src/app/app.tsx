import * as React from "react";
import { unstable_HistoryRouter as Router, useRoutes } from "react-router-dom";
import { history } from "~/history";
import { routes } from "~/pages";
import { NavLink } from "~/shared/ui/nav_link";
import "./app.css";

export const App: React.FC = () => {
  return (
    <div>
      <Router history={history}>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
        <Routes />
      </Router>
    </div>
  );
};

const Routes: React.FC = () => {
  const pages = useRoutes(routes);
  return pages;
};
