import * as React from 'react'
import { DataBrowserRouter } from 'react-router-dom'
import { Provider } from 'effector-react/scope'
import { routes } from '~/pages'
import '~/styles/index.css'
import { scope } from '~/scope'

export const App: React.FC = () => {
  return (
    <Provider value={scope}>
      <DataBrowserRouter
        fallbackElement={
          <div className='bg-light-600 flex h-screen items-center justify-center'>
            <div className='bg-light-800 rounded p-4 shadow'>Loading...</div>
          </div>
        }
        routes={routes}
      />
    </Provider>
  )
}
