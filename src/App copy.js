import { useReducer, useState } from "react";
import styled from "styled-components";
import Button from "./components/Button";
import Field from "./components/Field";
import Input from "./components/Field/Input";
import Label from "./components/Field/Label";
import Main from "./components/Main";
import NewsForm from "./components/NewsForm";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 400px;
`
const Display = styled.p`
  font-size: 1.8rem;
`
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      }
    case 'SET':
      return {
        ...state,
        count: action.payload
      }
    default:
      return state
  }
}

const initialState = {
  count: 0
}

function App() {

  const [{ count}, dispatch] = useReducer(reducer, initialState)
  const [input, setInput] = useState(0)
  return (
    <Main>
    <Container>
      <Label>
        <Input placeholder="Initial Counter" value={input} onChange={e => setInput(+e.target.value)} type="number"/>
        <Button onClick={() =>  dispatch({type: 'SET', payload: input }) }>Set</Button>
      </Label>
        <Display>{count}</Display>
        <Button onClick={() => dispatch({type: 'INCREMENT'})}>inc</Button>
        <Button onClick={() => dispatch({type: 'DECREMENT'})}>dec</Button>
    </Container>
    </Main>
  );
}

export default App;
