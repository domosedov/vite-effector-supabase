import { useRoutes, type RouteObject } from "react-router-dom";
import { HomePage } from "./home";

export const pageLinks = {
  home: () => "/",
};

export const pagePaths = {
  home: "/",
};

const routes: RouteObject[] = [
  {
    path: pagePaths.home,
    element: <HomePage />,
  },
];

export const Routes = () => useRoutes(routes);
