import { useReducer, useRef } from 'react'

/**
 * useReducer 使用範例, 比照 Redux 的方式改變狀態
 * @see {@link [React Hooks - useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)}
 */
function UseReducer() {
  const [todoState, dispatch] = useReducer(todoReducer, {
    todos: [],
  })
  const inputRef = useRef<HTMLInputElement>(null)

  const onUpdateTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onAdd()
    }
  }

  const onAdd = () => {
    const newTodo = inputRef.current?.value
    if (!newTodo) return void 0
    dispatch({ type: TodoActionKind.ADD_TODO, payload: newTodo.trim() })
    inputRef.current.value = ''
  }

  return (
    <main>
      <h4>useReducer</h4>
      <input type="text" onKeyPress={onUpdateTodo} ref={inputRef} />
      <button onClick={onAdd}>Add</button>
      <div className="d-flex flex-column gap-1 mt-2">
        {todoState.todos.map((todo, idx) => (
          <div key={idx}>{todo}</div>
        ))}
      </div>
    </main>
  )
}

export default UseReducer

// Tool Functions
// =======================
interface TodoState {
  todos: string[]
}

enum TodoActionKind {
  ADD_TODO = 'ADD_TODO',
}

interface TodoAction {
  type: TodoActionKind
  payload: string
}

function todoReducer(state: TodoState, action: TodoAction) {
  if (action.type === TodoActionKind.ADD_TODO) {
    return Object.assign({}, state, {
      todos: state.todos.concat(action.payload),
    })
  }

  return state
}
