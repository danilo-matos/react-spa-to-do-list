import React, { useState } from "react";
import TodoForm from "./TodoForm";

function Todo({ todos, completeTodo, removeTodo, updateTodo, hideAllChecked }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };


  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }
  console.log(hideAllChecked)

  return todos.map((todo, index) => (
    
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        
        <label>
          <input type="checkbox" />
        </label>
        {todo.text}
      </div>
     
      <div className="icons">
        <button
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        >Remove</button>
        |
        <button
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        >Edit</button>
      </div>
    </div>
  
  ));
}

export default Todo;