import * as React from 'react'
import { RouteObject } from 'react-router-dom'
import { DashboardLayout } from './dashboard_layout/page'
import { HomePage } from './home'
import { Root } from './root'
import { SecretPage } from './secret'
import { SignInPage } from './signin'
import { SignUpPage } from './signup'
import { loader as todoLoader } from './todo/loader'
import { loader as dashboardLoader } from './dashboard_layout/loader'

const TodoPage = React.lazy(() =>
  import('./todo/page').then(module => ({ default: module.TodoPage })),
)

export const paths = {
  home: () => '/',
  todos: () => '/todos',
  todo: (id: `${number}` | number | ':id') => `/todos/${id}`,
  signup: () => '/signup',
  signin: () => '/signin',
  dashboard: () => '/dashboard',
} as const

export const routes: RouteObject[] = [
  {
    path: paths.home(),
    element: <Root />,
    loader: Root.loader,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: paths.todo(':id'),
        element: (
          <React.Suspense fallback='loading...'>
            <TodoPage />
          </React.Suspense>
        ),
        loader: todoLoader,
      },
      {
        path: paths.signup(),
        element: <SignUpPage />,
      },
      {
        path: paths.signin(),
        element: <SignInPage />,
      },
      {
        path: paths.dashboard(),
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <SecretPage />,
          },
        ],
      },
    ],
  },
]
