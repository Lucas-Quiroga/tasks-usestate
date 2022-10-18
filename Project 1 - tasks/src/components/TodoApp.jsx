import React, { useState } from "react";
import Todo from "./Todo";

const TodoApp = () => {
  const [title, setTitle] = useState("hola");
  const [todos, setTodos] = useState([]);

  //   const handleClick = (e) => {
  //     e.preventDefault();
  //     setTitle("Lucas");
  //   };

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
    console.log(todos);
  };
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
            <Todo item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
