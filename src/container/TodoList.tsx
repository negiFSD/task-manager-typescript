import React from 'react'
import SingleTodo from '../container/SingleTodo'
import {Todo} from '../models/model'

  
interface TodoListProps  {
    todos:Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

function TodoList({todos, setTodos}: TodoListProps) {
  return (
    <div className="todos">
    {todos?.map((todo) => (
      <SingleTodo
        todos={todos}
        todo={todo}
        key={todo.id}
        setTodos={setTodos}
      />
    ))}
  </div>
  )
}

export default TodoList