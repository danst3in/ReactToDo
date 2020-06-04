import React from "react";
import { Todos } from "./ToDoForm";

interface TodoProps {
  key?: string;
  //   id?: string;
  todo: Todos;
  toggleComplete?: (e: React.SyntheticEvent<HTMLDivElement>) => void;
}

export default (props: TodoProps) => (
  <div
    style={{ textDecoration: props.todo.complete ? "line-through" : "" }}
    onClick={props.toggleComplete}
  >
    {props.todo.text}
  </div>
);
