import { createEvent, createEffect, createStore, sample } from 'effector'
import type { ApiError, PostgrestError, User } from '@supabase/supabase-js'
import type { Nullable } from '~/shared/types/utils'
import { supabaseClient } from '~/supabase'
import { authModel } from '../auth'
import { debug } from 'patronum'

export type Profile = {
  id: string
  first_name: string
  last_name: string
  email: string
}

export const getProfiles = createEvent()

export const fetchProfilesFx = createEffect<void, Nullable<Profile[]>, ApiError | PostgrestError>(
  async () => {
    const { data } = await supabaseClient
      .from<Profile>('profiles')
      .select(
        `
      id,first_name,last_name,email,
      todos (title,profile:profile_id (first_name)),
      cities (name)
    `,
      )
      .throwOnError(true)
    return data
  },
)

export const $profiles = createStore<Profile[]>([])

$profiles.on(fetchProfilesFx.doneData, (_, profiles) => profiles ?? [])

sample({
  clock: getProfiles,
  source: $profiles,
  filter: profiles => profiles.length === 0,
  target: fetchProfilesFx,
})

type CreateProfileInputs = Pick<Profile, 'first_name' | 'last_name'>

export const createProfile = createEvent<CreateProfileInputs>()

export const createProfileFx = createEffect<Profile, Nullable<Profile>, ApiError | PostgrestError>()

sample({
  clock: createProfile,
  source: authModel.$user,
  filter: (user): user is User => user !== null,
  fn: (user: User, inputs) => ({
    id: user.id,
    email: user.email ?? '',
    first_name: inputs.first_name,
    last_name: inputs.last_name,
  }),
  target: createProfileFx,
})

createProfileFx.use(async inputs => {
  const { data } = await supabaseClient
    .from<Profile>('profiles')
    .upsert(inputs)
    .throwOnError(true)
    .single()
  return data
})

debug(fetchProfilesFx)
