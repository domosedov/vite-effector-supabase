import type { RouteObject } from "react-router-dom";
import { HomePage } from "./home";
import { TodoPage } from "./todo";

export const paths = {
  home: () => "/",
  todos: () => "/todos",
  todo: (id: `${number}` | number | ":id") => `/todos/${id}`,
};

export const routes: RouteObject[] = [
  {
    path: paths.home(),
    element: <HomePage />,
  },
  {
    path: paths.todo(":id"),
    element: <TodoPage />,
  },
];
