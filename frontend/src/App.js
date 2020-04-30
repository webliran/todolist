import React, { useState,useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import axios from 'axios';

import './App.css';

function App() {

  const [todos, updateTodos] = useState([]);

  useEffect(() => {
      getTodos();
  }, [])

  let getTodos = async () => {
      let res = await axios.get('http://localhost:5000/todo')
      updateTodos(res.data)
  }

  return (
    <div className="container-fluid">
      <TodoForm todos={todos} updateTodos={updateTodos} />
      <hr />
      <TodoList todos={todos} updateTodos={updateTodos} />
    </div>
  );
}

export default App;

/*
למשוך מידע מAPI
להציג אותו
לדחוף אותו ל TODOLIST

לעדכן משימה

אפשרות למחוק משימה

לייצר משימה



*/