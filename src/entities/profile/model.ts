import { createEvent, createEffect, createStore, sample } from 'effector'
import type { ApiError, PostgrestError } from '@supabase/supabase-js'
import type { Nullable } from '~/shared/types/utils'
import { supabaseClient } from '~/supabase'

export type Profile = {
  id: string
  first_name: string
  last_name: string
}

export const getProfiles = createEvent()

export const fetchProfilesFx = createEffect<void, Nullable<Profile[]>, ApiError | PostgrestError>(
  async () => {
    const { data } = await supabaseClient
      .from<Profile>('profiles')
      .select(
        `
      id,first_name,last_name,
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
  target: fetchProfilesFx,
})
