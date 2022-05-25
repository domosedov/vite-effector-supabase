import { createEffect, createEvent, createStore, type EventPayload, sample } from 'effector'
import { createGate } from 'effector-react'
import { debug } from 'patronum'
import { reshape } from 'patronum/reshape'
import type { NavigateFunction, Location, Navigation, To, NavigateOptions } from 'react-router-dom'
import { isBrowser } from '../env'
import type { Nullable } from '../types/utils'
import { isNotNull } from '../utils/is_not_null'

type RouterGateProps = {
  location: Nullable<Location>
  navigate: Nullable<NavigateFunction>
  navigation: Nullable<Navigation>
}

export const RouterGate = createGate<RouterGateProps>({
  defaultState: {
    location: null,
    navigate: null,
    navigation: null,
  },
  name: 'RouterGate',
})

export const navigate = createEvent<{ to: To; options?: NavigateOptions } | number>()

export const $pathname = createStore(isBrowser ? window.location.pathname : null)
export const $location = RouterGate.state.map(state => state.location)
export const $navigate = RouterGate.state.map(state => state.navigate)
export const $navigation = RouterGate.state.map(state => state.navigation)

export const { $navigationLocation, $navigationState } = reshape({
  source: $navigation,
  shape: {
    $navigationLocation: navigation => navigation?.location ?? null,
    $navigationState: navigation => navigation?.state ?? null,
  },
})

export const { $navigationIdle, $navigationLoading, $navigationSubmitting } = reshape({
  source: $navigationState,
  shape: {
    $navigationIdle: state => state === 'idle',
    $navigationLoading: state => state === 'loading',
    $navigationSubmitting: state => state === 'submitting',
  },
})

sample({
  clock: $location,
  source: $pathname,
  filter: (currentPathname, location) =>
    isNotNull(location) && currentPathname !== location.pathname,
  fn: (_, location) => location?.pathname as string,
  target: $pathname,
})

sample({
  clock: navigate,
  source: $navigate,
  filter: navigateFn => isNotNull(navigateFn),
  fn: (navigateFn, to) =>
    ({ navigateFn, to } as {
      navigateFn: NavigateFunction
      to: EventPayload<typeof navigate>
    }),
  target: createEffect<{ navigateFn: NavigateFunction; to: EventPayload<typeof navigate> }, void>(
    ({ navigateFn, to }) => {
      if (typeof to === 'number') {
        navigateFn(to)
      } else {
        navigateFn(to.to, to.options)
      }
    },
  ),
})
