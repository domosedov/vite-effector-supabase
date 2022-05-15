import * as React from 'react'
import { useEvent, useStore } from 'effector-react'
import { useParams } from 'react-router-dom'
import { Button } from '~/shared/ui/button'
import { todoModel } from '~/entities/todo'

export const TodoPage: React.FC = () => {
  const { id } = useParams()
  const fetchTodos = useEvent(todoModel.fetchTodos)
  const todos = useStore(todoModel.$todos)

  return (
    <div>
      <h1>Todo page #{id}</h1>
      <Button type='button' onClick={fetchTodos} color='secondary'>
        Fetch todos
      </Button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}
