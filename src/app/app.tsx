import * as React from "react";
import { unstable_HistoryRouter as Router } from "react-router-dom";
import { history } from "~/history";
import { Routes } from "~/pages";
import "./app.css";

export const App: React.FC = () => {
  return (
    <div>
      <Router history={history}>
        <Routes />
      </Router>
    </div>
  );
};
