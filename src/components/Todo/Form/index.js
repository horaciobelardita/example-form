import { useContext } from "react"
import TodoContext from "../../../contexts/todo/context"
import Button from "../../Button"
import Field from "../../Field"
import Form from "../../Form"



export const TodoForm = () => {

  const {addTodo} = useContext(TodoContext)

  const handleSubmit = event => {
    event.preventDefault()
    const newTodo = {
      text: event.target.text.value,
      completed: false
    }
    event.target.text.value = ''
    addTodo(newTodo)
  }
  return (
       <Form onSubmit={handleSubmit}>
      <Field.Text label="Text" name="text" type="text" placeholder="Todo Text"  />
      <Button>Add</Button>
    </Form>
  )
}
