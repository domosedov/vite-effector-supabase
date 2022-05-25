import * as React from 'react'
import { Outlet } from 'react-router-dom'
import { allSettled } from 'effector'
import { Navbar } from '~/widgets/navbar'
import { scope } from '~/scope'
import type { Page } from '~/shared/types/app'
import { NavigationWatcher } from '~/shared/router/watcher'
import { appModel } from '~/app'

export const Root: Page = () => {
  return (
    <React.Fragment>
      <NavigationWatcher />
      <header className='bg-green-300'>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  )
}

Root.loader = async () => {
  await allSettled(appModel.appStarted, { scope })
}
