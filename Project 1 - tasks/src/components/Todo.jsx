import React from "react";

const Todo = ({ item }) => {
  return <div key={item.id}>{item.title}</div>;
};

export default Todo;
