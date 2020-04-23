import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import './App.css';

function App() {



  return (
    <div className="container-fluid">
      <TodoForm />
      <hr />
      <TodoList />
    </div>
  );
}

export default App;
