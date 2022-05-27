import {
  createEffect,
  createEvent,
  createStore,
  type EventPayload,
  sample,
  StoreValue,
  attach,
} from 'effector'
import { createGate } from 'effector-react'
import { debug } from 'patronum'
import { reshape } from 'patronum/reshape'
import type { NavigateFunction, Location, Navigation, To, NavigateOptions } from 'react-router-dom'
import invariant from 'tiny-invariant'
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

type NavigatePayload = { to: To; options?: NavigateOptions } | number

export const navigate = createEvent<NavigatePayload>()

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

export const navigateBaseFx = createEffect<
  { navigateFn: StoreValue<typeof $navigate>; to: EventPayload<typeof navigate> },
  void
>(({ navigateFn, to }) => {
  invariant(navigateFn, '[navigateBaseFx]: navigateFn is required')
  if (typeof to === 'number') {
    navigateFn(to)
  } else {
    navigateFn(to.to, to.options)
  }
})

export const navigateFx = attach({
  effect: navigateBaseFx,
  source: $navigate,
  mapParams: (payload: NavigatePayload, navigateFn) => ({ navigateFn, to: payload }),
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
  target: navigateFx,
})
