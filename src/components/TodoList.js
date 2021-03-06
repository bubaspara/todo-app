import React from "react";
import Todo from "./Todo";

export default function TodoList({ filteredTodos, todos, setTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        ))}
      </ul>
    </div>
  );
}
