import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ todos }) => {
  return (

    <ul>
      <ToDo title={todos[0]} />
      <ToDo title={todos[1]} />
      <ToDo title={todos[2]} />
    </ul>

  );
};

export default ToDoList;