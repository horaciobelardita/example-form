import { ADD_TODO } from "./actions"


const reducer = (state, action) => {


  switch (action.type) {
    case ADD_TODO:
    return {
        ...state,
        todos: [...state.todos, { ...action.payload, id: new Date().getTime()} ]
      }
    default:
      return state
  }

}
export default reducer