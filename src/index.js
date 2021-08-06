import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Reset from './styles/generics/Reset';
import { TodoState } from './contexts/todo/state';

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <TodoState>
      <App />
    </TodoState>
  </React.StrictMode>,
  document.getElementById('root')
);

