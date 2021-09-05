import React from "react";
import "./Todo.css";

function Todo({task, id, completed, removeTodo, toggleTodo}) {
    return(
    <li onClick={toggleTodo} className="todo-item">
        - 
        <span
            style={{
                textDecoration: completed? "line-through red 1.2px": "none"
            }}
        >
            {task}
        </span>
        <span 
            className="close-btn"
            onClick={removeTodo}
        >
            X
        </span>
    </li>
)}

export default Todo;