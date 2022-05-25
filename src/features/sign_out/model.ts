import { sample } from 'effector'
import { paths } from '~/pages'
import { authModel } from '~/shared/auth'
import { routerModel } from '~/shared/router'

export const signOut = authModel.signOut

sample({
  clock: signOut,
  fn: () => ({ to: paths.signin() }),
  target: routerModel.navigate,
})
