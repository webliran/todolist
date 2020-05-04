import React from 'react';

function TodoItem(props) {

    let {todo,id,handleDelete,handleCompleted} = props;

    let completed = todo.completed ? "checked" : "";
    let classCompleted = todo.completed ? {textDecoration:"line-through"} : {}; 

    return (
        <li key={id} className="list-group-item">
            <div className="row">
                <div className="col-md-10">
                    <span style={classCompleted}>{todo.todoText}</span>
                </div>
                <div className="col-md-2">
                    <input type="checkbox" checked={completed} onChange={() => handleCompleted(id)} />
                    <button onClick={() => handleDelete(id)} style={{ marginRight: "5px" }} className="btn btn-danger btn-sm">X</button>
                </div>
            </div>
        </li>
    )

}

export default TodoItem;