import React, { ReactNode } from "react";
import TodoForm, { Todos } from "./ToDoForm";
import Todo from "./ToDo";

/*
    Requirements
    1. add todo
    2. display todos
    3. cross off todo
    4. show number of active todos
    5. filter all/active/complete
    6. delete todo
    7. delete all complete todos
        - only show if at least one todo completed
    8. button to toggle all on/off
*/
// interface Todo {
//   id: string;
//   text: string;
//   complete: boolean;
// }
// interface TodoListHandlers {
//   handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   onSubmit: (todo: Todo) => ReactNode;
// }

type TodoListState = { todos: Todos[] };

export default class TodoList extends React.Component<{}, TodoListState> {
  state: TodoListState = {
    todos: [],
  };

  addTodo = (todo: Todos) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };

  toggleComplete = (id?: string) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          //update
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  render() {
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {this.state.todos.map((todo) => (
          <Todo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            todo={todo}
          />
        ))}
        <div>
          todos left:{" "}
          {this.state.todos.reduce((acc, next) => {
            if (!next.complete) {
              acc += 1;
            }
            return acc;
          }, 0)}
        </div>
      </div>
    );
  }
}
