import React from 'react'
import {Todo} from '../models/model'

type SingleTodoProps ={
    todo:Todo
    todos:Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

function SingleTodo({todos, todo, setTodos}: SingleTodoProps) {
  return (
    <div>SingleTodo</div>
  )
}

export default SingleTodo