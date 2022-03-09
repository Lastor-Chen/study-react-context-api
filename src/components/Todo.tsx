import React from 'react'
import { TodoContext } from '@store/todo'

/** FC Hook, 較新 */
export function TodoByHook() {
  const { todos } = React.useContext(TodoContext)

  return (
    <>
      {todos.map((todo, idx) => {
        return <div key={idx}>{todo}</div>
      })}
    </>
  )
}

/** FC HOC Consumer, 較舊 */
export function TodoByConsumer() {
  return (
    <TodoContext.Consumer>
      {(value) =>
        value.todos.map((todo, idx) => (
          <div key={idx}>{todo}</div> //
        ))
      }
    </TodoContext.Consumer>
  )
}

/** Class 組件, CodeSanbox "declare" 宣告有問題 */
export class TodoComponent extends React.Component {
  static contextType = TodoContext
  // declare context: React.ContextType<typeof TodoContext>;

  render() {
    const { todos } = this.context as React.ContextType<typeof TodoContext>
    return (
      <>
        {todos.map((todo, idx) => {
          return <div key={idx}>{todo}</div>
        })}
      </>
    )
  }
}
