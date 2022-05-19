import { createStore, createEvent, createEffect, sample } from 'effector'
import type { ApiError, PostgrestError } from '@supabase/supabase-js'
import type { Nullable } from '~/shared/types/utils'
import { supabaseClient } from '~/supabase'

export type Todo = {
  id: string
  created_at: string
  profile_id: string
  title: string
  description?: string
  is_completed: boolean
  completed_at?: string
}

export const fetchTodos = createEvent()
export const fetchTodosFx = createEffect<void, Nullable<Todo[]>, ApiError | PostgrestError>()

export const $todos = createStore<Todo[]>([])

$todos.on(fetchTodosFx.doneData, (_, todos) => todos ?? [])

sample({
  clock: fetchTodos,
  target: fetchTodosFx,
})

fetchTodosFx.use(async () => {
  const { data } = await supabaseClient.from<Todo>('todos').select('*').throwOnError(true)
  return data
})
