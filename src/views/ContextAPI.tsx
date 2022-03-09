import { TodoContext } from '@/store/todoState'
import { TodoByHook, TodoByConsumer, TodoComponent } from '@components/Todo'

/**
 * Context API 使用範例, 用以提供全域狀態
 * @see {@link [React Context](https://reactjs.org/docs/context.html)}
 */
function ContextAPI() {
  return (
    <main>
      <h4 className="py-3">Context API</h4>
      <div className="d-flex gap-5">
        <TodoContext.Provider value={{ todos: ['run', 'play'] }}>
          <TodoByHook />
          <TodoByConsumer />
          <TodoComponent />
        </TodoContext.Provider>
      </div>
    </main>
  )
}

export default ContextAPI
