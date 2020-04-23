import React from 'react';

import './TodoForm.css';

function TodoForm() {



    return (
        <form>
            <div className="form-group">
                <input type="text" className="form-control" id="add_todo" placeholder="תיאור המשימה" />
            </div>

            <button type="button" className="btn btn-primary">הוסף משימה</button>
        </form>
    );
}

export default TodoForm;