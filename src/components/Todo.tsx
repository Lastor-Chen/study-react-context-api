import React from 'react'
import { TodoContext } from '@store/todo'

/** FC Hook, 較新 */
export function TodoByHook() {
  const { todos } = React.useContext(TodoContext)

  return (
    <section>
      <h5>useContext</h5>
      <hr />
      {todos.map((todo, idx) => {
        return <div key={idx}>{todo}</div>
      })}
    </section>
  )
}

/** FC HOC Consumer, 較舊 */
export function TodoByConsumer() {
  return (
    <section>
      <h5>Context.Consumer</h5>
      <hr />
      <TodoContext.Consumer>
        {(value) => value.todos.map((todo, idx) => <div key={idx}>{todo}</div>)}
      </TodoContext.Consumer>
    </section>
  )
}

/** Class 組件, CodeSanbox "declare" 宣告有問題 */
export class TodoComponent extends React.Component {
  static contextType = TodoContext
  declare context: React.ContextType<typeof TodoContext>

  render() {
    const { todos } = this.context
    return (
      <section>
        <h5>Class Component</h5>
        <hr />
        {todos.map((todo, idx) => {
          return <div key={idx}>{todo}</div>
        })}
      </section>
    )
  }
}
