import { useReducer } from "react"
import { ADD_TODO } from "./actions"
import TodoContext from "./context"
import reducer from "./reducer"



export const TodoState = ({children}) => {
  const initialState = {todos: []}

  const [{todos}, dispatch] = useReducer(reducer, initialState)

  const addTodo = todo => {
    dispatch({type: ADD_TODO, payload: todo})
  }

  return (
    <TodoContext.Provider value={{todos, addTodo}}>
      {children}
    </TodoContext.Provider>
  )
}
