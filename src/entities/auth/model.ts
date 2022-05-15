import type { UserCredentials, AuthChangeEvent, Session, User } from '@supabase/supabase-js'
import { createEvent, createEffect, createStore, sample, attach } from 'effector'
import { debug } from 'patronum'
import type { Nullable } from '~/shared/types/utils'
import { supabaseClient } from '~/supabase'

type JWTAccessToken = string

const authStateChanged = createEvent<{ event: AuthChangeEvent; session: Nullable<Session> }>()

export const $session = createStore<Nullable<Session>>(supabaseClient.auth.session())
export const $user = createStore<Nullable<User>>(supabaseClient.auth.session()?.user ?? null)
export const $accessToken = $session.map(session => session?.access_token ?? null)
export const $isSignedIn = $user.map(user => !!user)

supabaseClient.auth.onAuthStateChange((event, session) => authStateChanged({ event, session }))

$session.on(authStateChanged, (_, { session }) => session)

sample({
  clock: $session,
  fn: session => session?.user ?? null,
  target: $user,
})

// Get user
export const getUser = createEvent<JWTAccessToken>()
const getUserFx = createEffect<
  JWTAccessToken,
  Awaited<ReturnType<typeof supabaseClient.auth.api.getUser>>
>()

$user.on(getUserFx.doneData, (_, { user }) => user)

sample({
  clock: getUser,
  target: getUserFx,
})

getUserFx.use(token => supabaseClient.auth.api.getUser(token))

// Sign in
export const signInViaCredentials =
  createEvent<Required<Pick<UserCredentials, 'email' | 'password'>>>()
const signInFx = createEffect<
  UserCredentials,
  Awaited<ReturnType<typeof supabaseClient.auth.signIn>>
>()

sample({
  clock: signInViaCredentials,
  target: signInFx,
})

signInFx.use(credentials => supabaseClient.auth.signIn(credentials))

// Sign out
export const signOut = createEvent()
const signOutFx = createEffect<void, Awaited<ReturnType<typeof supabaseClient.auth.signOut>>>()

sample({
  clock: signOut,
  target: signOutFx,
})

signOutFx.use(() => supabaseClient.auth.signOut())

// Sign up
export const signUpViaCredentials =
  createEvent<Required<Pick<UserCredentials, 'email' | 'password'>>>()
const signUpFx = createEffect<
  UserCredentials,
  Awaited<ReturnType<typeof supabaseClient.auth.signUp>>
>()

sample({
  clock: signUpViaCredentials,
  target: signUpFx,
})

signUpFx.use(credentials => supabaseClient.auth.signUp(credentials))

// Validate user
export const validateUser = createEvent()
const validateUserFx = attach({ effect: getUserFx })

sample({
  clock: validateUser,
  source: $accessToken,
  filter: (token): token is JWTAccessToken => !!token,
  target: validateUserFx,
})

debug($isSignedIn)
