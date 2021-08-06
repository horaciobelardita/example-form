import { useContext } from "react"
import TodoContext from "../../../contexts/todo/context"

export const TodoList = () => {
  const {todos}  = useContext(TodoContext)
  return (
    <ul style={{margin: 0, padding: 0}}>
      {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
    </ul>
  )
}
