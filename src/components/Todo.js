import React from "react";

export default function Todo({ setTodos, todo, todos }) {
  const handleDelete = (id) => {
    setTodos(todos.filter((el) => el.id !== id));
  };

  const handleComplete = (id) => {
    setTodos(
      todos.map((el) => {
        if (el.id === id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {todo.text}
      </li>
      <button className="complete-btn" onClick={() => handleComplete(todo.id)}>
        <i className="fas fa-check" />
      </button>
      <button className="trash-btn" onClick={() => handleDelete(todo.id)}>
        <i className="fas fa-trash" />
      </button>
    </div>
  );
}
