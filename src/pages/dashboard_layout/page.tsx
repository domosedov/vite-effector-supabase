import * as React from 'react'
import { Outlet } from 'react-router-dom'
import { useStore } from 'effector-react'
import { authModel } from '~/shared/auth'

export const DashboardLayout: React.FC = () => {
  const isSignedIn = useStore(authModel.$isSignedIn)

  if (!isSignedIn) return <div>Not authorized</div>

  return <Outlet />
}
