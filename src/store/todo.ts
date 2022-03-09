import React from 'react'

interface TodoState {
  todos: string[]
}

export const TodoContext = React.createContext<TodoState>({
  todos: [],
})
