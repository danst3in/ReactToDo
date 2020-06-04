import React from "react";
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

type TodoListState = {todos:Todo[]}

export default class TodoList extends React.Component<{},TodoListState> {

    state:TodoListState = {
        todos:[]
    }

    addTodo = (todo) => {

        this.setState({
            todos:[todo,...this.state.todos]
        })

    }

    render(){
        return(
             <div>
                 <TodoForm onSubmit={this.addTodo}/>
                 {JSON.stringify(this.state.todos)}
            </div>)
    }
}