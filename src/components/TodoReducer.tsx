import React, { useReducer, useState } from 'react'
import { todoReducer, TodoActionKind } from '@store/todo'

const todosInitialState = {
  todos: [],
}

function TodoReducer() {
  const [store, dispatch] = useReducer(todoReducer, todosInitialState)
  const [newTodo, setNewTodo] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.currentTarget.value)
  }

  const onAdd = () => {
    dispatch({ type: TodoActionKind.ADD_TODO, payload: newTodo })
    setNewTodo('')
  }

  return (
    <>
      <input type="text" value={newTodo} onChange={onChange} />
      <button onClick={onAdd}>ADD</button>
      {store.todos.map((todo, idx) => (
        <div key={idx}>{todo}</div>
      ))}
    </>
  )
}

export default TodoReducer
