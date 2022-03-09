import React from 'react'

interface TodoState {
  todos: string[]
}

export enum TodoActionKind {
  ADD_TODO = 'ADD_TODO',
}

interface TodoAction {
  type: TodoActionKind
  payload: string
}

// for Todo.tsx
export const TodoContext = React.createContext<TodoState>({
  todos: [],
})

// for TodoReducer.tsx
export function todoReducer(state: TodoState, action: TodoAction) {
  if (action.type === TodoActionKind.ADD_TODO) {
    return Object.assign({}, state, {
      todos: state.todos.concat(action.payload),
    })
  }

  return state
}
