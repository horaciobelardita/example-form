import { useReducer, useState } from "react";
import styled from "styled-components";
import Button from "./components/Button";
import Field from "./components/Field";
import Input from "./components/Field/Input";
import Label from "./components/Field/Label";
import Main from "./components/Main";
import NewsForm from "./components/NewsForm";
import { TodoForm } from "./components/Todo/Form";
import { TodoList } from "./components/Todo/List";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 400px;
`
const Display = styled.p`
  font-size: 1.8rem;
`

function App() {

  return (
    <Main>
      <Container>
        <TodoForm />
        <TodoList />
      </Container>
    </Main>
  );
}

export default App;
