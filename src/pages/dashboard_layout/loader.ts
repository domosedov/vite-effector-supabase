import { allSettled } from 'effector'
import type { LoaderFunction } from 'react-router-dom'
import { scope } from '~/scope'
import { authModel } from '~/shared/auth'

export const loader: LoaderFunction = async () => {
  await allSettled(authModel.validateUser, { scope })
}
