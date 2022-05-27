import * as React from 'react'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import { useEvent, useStore } from 'effector-react'
import { paths } from '~/pages'
import { authModel } from '~/shared/auth'
import { routerModel } from '~/shared/router'
import { signOutFeatureModel } from '~/features/sign_out'

export const Navbar: React.FC = () => {
  const isSignedIn = useStore(authModel.$isSignedIn)
  const isLoading = useStore(routerModel.$navigationLoading)
  const signOut = useEvent(signOutFeatureModel.signOutClicked)

  return (
    <nav className='container mx-auto flex items-center space-x-2 p-2'>
      {isLoading && <div>Loading...</div>}
      <NavLink
        className={({ isActive }) =>
          clsx(
            'rounded-md bg-green-500 px-6 py-2 text-sm font-medium uppercase text-white duration-200 hover:bg-green-600',
            isActive && 'bg-orange-500 hover:bg-orange-600',
          )
        }
        to={paths.home()}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          clsx(
            'rounded-md bg-green-500 px-6 py-2 text-sm font-medium uppercase text-white duration-200 hover:bg-green-600',
            isActive && 'bg-orange-500 hover:bg-orange-600',
          )
        }
        to={paths.signup()}
      >
        Signup
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          clsx(
            'rounded-md bg-green-500 px-6 py-2 text-sm font-medium uppercase text-white duration-200 hover:bg-green-600',
            isActive && 'bg-orange-500 hover:bg-orange-600',
          )
        }
        to={paths.todo(666)}
      >
        Single Todo
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          clsx(
            'rounded-md bg-green-500 px-6 py-2 text-sm font-medium uppercase text-white duration-200 hover:bg-green-600',
            isActive && 'bg-orange-500 hover:bg-orange-600',
          )
        }
        to={paths.dashboard()}
      >
        Dashboard
      </NavLink>
      {isSignedIn ? (
        <button
          onClick={signOut}
          type='button'
          className='rounded-md bg-red-500 px-6 py-2 text-sm font-medium uppercase text-white duration-200 hover:bg-red-600'
        >
          Sign Out
        </button>
      ) : (
        <NavLink
          className={({ isActive }) =>
            clsx(
              'rounded-md bg-green-500 px-6 py-2 text-sm font-medium uppercase text-white duration-200 hover:bg-green-600',
              isActive && 'bg-orange-500 hover:bg-orange-600',
            )
          }
          to={paths.signin()}
        >
          Sign In
        </NavLink>
      )}
    </nav>
  )
}
