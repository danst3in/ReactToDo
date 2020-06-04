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

type TodoListState = {
  todos: Todos[];
  todosToShow: string;
};

export default class TodoList extends React.Component<{}, TodoListState> {
  state: TodoListState = {
    todos: [],
    todosToShow: "all",
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

  updateTodoToShow = (t: string) => {
    this.setState({
      todosToShow: t,
    });
  };

  handleDeleteTodo = (id?: string): void => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  render() {
    let todos: Todos[] = [];

    if (this.state.todosToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todosToShow === "active") {
      todos = this.state.todos.filter((x) => !x.complete);
    } else if (this.state.todosToShow === "complete") {
      todos = this.state.todos.filter((x) => x.complete);
    }

    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            todo={todo}
            onDelete={() => this.handleDeleteTodo(todo.id)}
          />
        ))}
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          todos left: {this.state.todos.filter((x) => !x.complete).length}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={() => this.updateTodoToShow("all")}>all</button>
          <button onClick={() => this.updateTodoToShow("active")}>
            active
          </button>
          <button onClick={() => this.updateTodoToShow("complete")}>
            complete
          </button>
        </div>
      </div>
    );
  }
}
