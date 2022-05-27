import { attach, createEvent, sample } from 'effector'
import { paths } from '~/pages'
import { authModel } from '~/shared/auth'
import { routerModel } from '~/shared/router'

export const signOutClicked = createEvent()

const navigateToSignUpPageFx = attach({
  effect: routerModel.navigateFx,
  mapParams: () => ({ to: paths.signup() }),
})

sample({
  clock: signOutClicked,
  target: navigateToSignUpPageFx,
})

sample({
  clock: navigateToSignUpPageFx.done,
  target: authModel.signOut,
})
