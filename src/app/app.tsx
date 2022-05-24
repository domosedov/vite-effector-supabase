import * as React from 'react'
import { unstable_HistoryRouter as Router, useRoutes } from 'react-router-dom'
import { history } from '~/history'
import { routes } from '~/pages'
import * as appModel from './model'
import '../styles/index.css'
import { Navbar } from '~/widgets/navbar'

export const App: React.FC = () => {
  return (
    <div>
      <appModel.AppGate />
      <Router history={history}>
        <header className='bg-green-300'>
          <Navbar />
        </header>
        <main>
          <Routes />
        </main>
      </Router>
    </div>
  )
}

const Routes: React.FC = () => {
  const pages = useRoutes(routes)
  return pages
}
