import { TodoContext } from '@store/todo'
import { TodoByHook, TodoByConsumer, TodoComponent } from '@components/Todo'

function ContextPage() {
  return (
    <>
      <h4>Context API</h4>
      <TodoContext.Provider value={{ todos: ['run', 'play'] }}>
        <div className="d-flex mb-3">
          <div className="col">
            <TodoByHook />
          </div>
          <div className="col">
            <TodoByConsumer />
          </div>
          <div className="col">
            <TodoComponent />
          </div>
        </div>
      </TodoContext.Provider>
    </>
  )
}

export default ContextPage
