import type {
  UserCredentials,
  AuthChangeEvent,
  Session,
  User,
  ApiError,
} from '@supabase/supabase-js'
import { createEvent, createEffect, createStore, sample, scopeBind, split } from 'effector'
import { debug } from 'patronum'
import { status } from 'patronum/status'
import { NavigateFunction } from 'react-router-dom'
import { paths } from '~/pages'
import { scope } from '~/scope'
import { routerModel } from '~/shared/router'
import type { Nullable } from '~/shared/types/utils'
import { supabaseClient } from '~/supabase'

type JWTAccessToken = string

const authStateChanged = createEvent<{ event: AuthChangeEvent; session: Nullable<Session> }>()

const authStateChangedEvent = authStateChanged.map(({ event }) => event)

export const $session = createStore<Nullable<Session>>(supabaseClient.auth.session())
export const $user = createStore<Nullable<User>>(supabaseClient.auth.session()?.user ?? null)
export const $accessToken = $session.map(session => session?.access_token ?? null)
export const $isSignedIn = $user.map(user => !!user)

supabaseClient.auth.onAuthStateChange((event, session) => {
  const changed = scopeBind(authStateChanged, { scope })
  changed({ event, session })
})

$session.on(authStateChanged, (_, { session }) => session)

sample({
  clock: $session,
  fn: session => session?.user ?? null,
  target: $user,
})

// Get user
export const getUserByToken = createEvent<JWTAccessToken>()
const getUserByTokenFx = createEffect<
  JWTAccessToken,
  Awaited<ReturnType<typeof supabaseClient.auth.api.getUser>>,
  ApiError
>()

$user.on(getUserByTokenFx.doneData, (_, { user }) => user)

sample({
  clock: getUserByToken,
  target: getUserByTokenFx,
})

getUserByTokenFx.use(async token => {
  const result = await supabaseClient.auth.api.getUser(token)
  if (result.error) throw result.error
  return result
})

// Sign in
export const signInViaCredentials =
  createEvent<Required<Pick<UserCredentials, 'email' | 'password'>>>()
const signInFx = createEffect<
  UserCredentials,
  Awaited<ReturnType<typeof supabaseClient.auth.signIn>>,
  ApiError
>()

sample({
  clock: signInViaCredentials,
  target: signInFx,
})

signInFx.use(async credentials => {
  const result = await supabaseClient.auth.signIn(credentials)
  if (result.error) throw result.error
  return result
})

// Sign out
export const signOut = createEvent()
const signOutFx = createEffect<
  void,
  Awaited<ReturnType<typeof supabaseClient.auth.signOut>>,
  ApiError
>()

sample({
  clock: signOut,
  target: signOutFx,
})

signOutFx.use(async () => {
  const result = await supabaseClient.auth.signOut()
  if (result.error) throw result.error
  return result
})

// Sign up
export const signUpViaCredentials =
  createEvent<Required<Pick<UserCredentials, 'email' | 'password'>>>()
const signUpFx = createEffect<
  UserCredentials,
  Awaited<ReturnType<typeof supabaseClient.auth.signUp>>,
  ApiError
>()

sample({
  clock: signUpViaCredentials,
  target: signUpFx,
})

signUpFx.use(async credentials => {
  const result = await supabaseClient.auth.signUp(credentials)
  if (result.error) throw result.error
  return result
})

// Validate user
export const validateUser = createEvent()
export const validateUserFx = createEffect<
  void,
  Nullable<Awaited<ReturnType<typeof supabaseClient.auth.api.getUser>>>,
  ApiError
>()
export const $validateUserStatus = status({ effect: validateUserFx })

sample({
  clock: validateUser,
  target: validateUserFx,
})

validateUserFx.use(async () => {
  const token = supabaseClient.auth.session()?.access_token
  if (!token) return null
  const result = await supabaseClient.auth.api.getUser(token)
  if (result.error) throw result.error
  return result
})

const { signedIn: _, signedOut } = split(authStateChangedEvent, {
  signedIn: event => event === 'SIGNED_IN',
  signedOut: event => event === 'SIGNED_OUT',
})

sample({
  clock: signedOut,
  source: routerModel.$navigate,
  filter: (navigate): navigate is NavigateFunction => typeof navigate === 'function',
  target: createEffect<NavigateFunction, void>(navigate => navigate(paths.signin())),
})

debug(authStateChangedEvent)
