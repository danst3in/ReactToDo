import React, { ReactNode } from "react";
import TodoForm from "./ToDoForm";

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
interface Todo {
    id?:string;
    text:string;
    complete:boolean;
}
interface TodoListHandlers {
   
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>)=>void;
    onSubmit: (todo:Todo)=> ReactNode;
}

type TodoListState = {todos:Todo[]}

export default class TodoList extends React.Component<{},TodoListState> {

    state:TodoListState = {
        todos:[]
    }

    addTodo = (todo:Todo) => {

        this.setState({
            todos:[todo,...this.state.todos]
        })

    }

    render(){
        return(
             <div>
                 <TodoForm onSubmit={this.addTodo}/>
                 {this.state.todos.map(todo=>( <div key={todo.id}> {todo.text}</div>))}
            </div>)
    }
}