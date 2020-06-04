import React from "react";
import { Todos } from "./ToDoForm";

interface TodoProps {
  key?: string;
  //   id?: string;
  todo: Todos;
  toggleComplete?: (e: React.SyntheticEvent<HTMLDivElement>) => void;
  onDelete?: (id: React.MouseEvent<HTMLButtonElement>) => void;
}

export default (props: TodoProps) => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div
      style={{ textDecoration: props.todo.complete ? "line-through" : "" }}
      onClick={props.toggleComplete}
    >
      {props.todo.text}
    </div>
    <button onClick={props.onDelete}>x</button>
  </div>
);
