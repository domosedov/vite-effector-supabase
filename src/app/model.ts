import { createEffect, createEvent, createStore, sample } from 'effector'
import { authModel } from '~/shared/auth'

const $appIsReady = createStore(false)
const $appIsNotReady = $appIsReady.map(v => !v)

export const appStarted = createEvent()

export const loadAppDataFx = createEffect(
  async () => await Promise.allSettled([authModel.validateUserFx()]),
)

sample({
  clock: appStarted,
  filter: $appIsNotReady,
  target: loadAppDataFx,
})

sample({
  clock: loadAppDataFx.finally,
  fn: () => true,
  target: $appIsReady,
})
