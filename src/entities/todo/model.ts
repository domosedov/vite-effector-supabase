import { createStore, createEvent, createEffect, sample } from 'effector'
import type { ApiError, PostgrestError } from '@supabase/supabase-js'
import type { definitions } from '~/shared/types/generated'
import type { Nullable } from '~/shared/types/utils'
import { supabaseClient } from '~/supabase'

export type Todo = definitions['todos']

export const fetchTodos = createEvent()
export const fetchTodosFx = createEffect<void, Nullable<Todo[]>, ApiError | PostgrestError>()

export const $todos = createStore<Todo[]>([])

$todos.on(fetchTodosFx.doneData, (_, todos) => todos ?? [])

sample({
  clock: fetchTodos,
  target: fetchTodosFx,
})

fetchTodosFx.use(async () => {
  const result = await supabaseClient.from<Todo>('todos').select('*')
  if (result.error) throw result.error
  return result.data
})
