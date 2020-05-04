import React,{useState,useRef} from 'react';
import axios from 'axios';

import './TodoForm.css';

function TodoForm(props) {
    const [todoText,updateTodotext] = useState();

    const refInputElem = useRef(null)

    let {todos,updateTodos} = props;

    let handleCreateTodo = async (e) => {
        e.preventDefault();
        let res = await axios.post('http://localhost:5000/todo',{
            todoText: todoText,
            completed: false,
        });

        updateTodos(res.data);
        refInputElem.current.value = '';
    }

    return (
        <form onSubmit={handleCreateTodo}>
            <div className="form-group">
                <input ref={refInputElem} value={todoText} onChange={(e) => updateTodotext(e.target.value)} type="text" className="form-control" id="add_todo" placeholder="תיאור המשימה" />
            </div>

            <button type="submit" className="btn btn-primary">הוסף משימה</button>
        </form>
    );
}

export default TodoForm;