import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './TodoList.css';
import TodoItem from './TodoItem';

function TodoList(props) {
    
    let {todos,updateTodos} = props;

    let handleCompleted = async (id) => {
        let res = await axios.put(`http://localhost:5000/todo/${id}`);
        updateTodos(res.data)
    }

    let handleDelete = async (id) => {
        let res = await axios.delete(`http://localhost:5000/todo/${id}`);
        updateTodos(res.data)
    }

    return (
        <ul className="list-group">
            {
                todos.map((todo, key) => {
                    return (
                        <TodoItem 
                            key={key} 
                            id={key} 
                            todo={todo} 
                            handleCompleted={handleCompleted} 
                            handleDelete={handleDelete}  
                        />
                    )
                })
            }
        </ul>
    );
}

export default TodoList;