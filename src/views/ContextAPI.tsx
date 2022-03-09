import { TodoContext } from '@store/todo'
import { TodoByHook, TodoByConsumer, TodoComponent } from '@components/Todo'

/**
 * Context API 使用範例, 用以提供全域狀態
 * @see {@link [React Context](https://reactjs.org/docs/context.html)}
 */
function ContextAPI() {
  return (
    <TodoContext.Provider value={{ todos: ['run', 'play'] }}>
      <h4 className="py-3">Context API</h4>
      <main className="d-flex gap-5">
        <TodoByHook />
        <TodoByConsumer />
        <TodoComponent />
      </main>
    </TodoContext.Provider>
  )
}

export default ContextAPI
