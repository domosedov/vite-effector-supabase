import * as React from 'react'
import { DataBrowserRouter } from 'react-router-dom'
import { Provider } from 'effector-react/scope'
import { routes } from '~/pages'
import '~/styles/index.css'
import { scope } from '~/scope'

export const App: React.FC = () => {
  return (
    <Provider value={scope}>
      <DataBrowserRouter fallbackElement={<div>Loading...</div>} routes={routes} />
    </Provider>
  )
}
