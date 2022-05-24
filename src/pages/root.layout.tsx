import * as React from 'react'
import { Outlet, type LoaderFunction } from 'react-router-dom'
import { allSettled } from 'effector'
import { Navbar } from '~/widgets/navbar'
import { scope } from '~/scope'
import { authModel } from '~/entities/auth'

export const loader: LoaderFunction = async () => {
  await allSettled(authModel.validateUser, { scope })
}

export const Page: React.FC = () => {
  return (
    <React.Fragment>
      <header className='bg-green-300'>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  )
}
