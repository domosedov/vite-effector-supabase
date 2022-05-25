import * as React from 'react'
import { useEvent, useStore } from 'effector-react'
import { useParams } from 'react-router-dom'
import { todoModel } from '~/entities/todo'
import { profileModel } from '~/entities/profile'
import type { Page } from '~/shared/types/app'

export const TodoPage: Page = () => {
  const { id } = useParams()
  const [fetchTodos, getProfiles] = useEvent([todoModel.fetchTodos, profileModel.getProfiles])
  const todos = useStore(todoModel.$todos)
  const profiles = useStore(profileModel.$profiles)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    fetchTodos()
    getProfiles()
  }

  return (
    <div>
      <h1>Todo page #{id}</h1>
      <button type='button' onClick={handleClick}>
        Fetch todos
      </button>
      <div>
        <h2>Profiles</h2>
        <pre>{JSON.stringify(profiles, null, 2)}</pre>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}
