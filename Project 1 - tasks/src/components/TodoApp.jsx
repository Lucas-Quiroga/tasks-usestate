import React, { useState } from "react";
import Todo from "./Todo";
import "./todoapp.css";

const TodoApp = () => {
  const [title, setTitle] = useState("hola");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setTitle(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTitle("");
  };

  function handleUpdate(id, value) {
    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodos(temp);
  }

  function handleDelete(id) {
    const temp = todos.filter((item) => item.id !== id);
    setTodos(temp);
  }

  return (
    <div>
      <h1>Lista de tareas</h1>
      <div className="todoContainer">
        <form className="todoCreateForm" onSubmit={handleSubmit}>
          <input onChange={handleChange} className="todoInput" value={title} />
          <input
            onClick={handleSubmit}
            type="submit"
            value="Create todo"
            className="buttonCreate"
          />
        </form>

        <div className="todosContainer">
          {todos.map((item) => (
            <Todo
              item={item}
              key={item.id}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
