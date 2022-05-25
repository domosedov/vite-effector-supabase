import { sample } from 'effector'
import { paths } from '~/pages'
import { authModel } from '~/shared/auth'
import { routerModel } from '~/shared/router'

export const signIn = authModel.signInViaCredentials

sample({
  clock: authModel.signInFx.done,
  fn: () => ({ to: paths.dashboard() }),
  target: routerModel.navigate,
})
