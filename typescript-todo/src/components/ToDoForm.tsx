import React, { ChangeEvent, FormEvent } from 'react';
import shortid from 'shortid';

interface TodoFormProps {
    name?:string;
    value?:string;
    placeholder?: string;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>)=>void;
    onSubmit: (e:FormEvent<HTMLFormElement>)=> void;
}

interface Todo {
    id?:string;
    text:string;
    complete:boolean;
}

type TodoFormState = Todo

// this function helps handle paramaterized keys in TypeScript
// const updateState = <T extends string>(key: keyof TodoFormState, value: T) => (
//     prevState: TodoFormState
//   ): TodoFormState => ({
//     ...prevState,
//     [key]: value
//   })

export default class TodoForm extends React.Component<TodoFormProps,TodoFormState> {

    state:TodoFormState = {
        text:'',
        complete:false
        
    }

    // handleChange = (e:FormEvent<HTMLInputElement>):void => {
    //     this.setState(updateState(e.target.name , e.target.value))
    // }

    handleChange = (e:FormEvent<HTMLInputElement>):void => {
        this.setState(prevState => ({
            ...prevState,
            
                [e.target.name] : e.target.value,
                [e.target.name] : e.target.value,
                [e.target.name] : e.target.value
            
        }))
    }

    handleSubmit = (e:FormEvent<HTMLFormElement>):void => {
        e.preventDefault();
        // submit the form
        this.props.onSubmit({
            id: shortid.generate(),
            text:this.state.text,
            complete:false,

        })
        console.log(this.state)
        this.setState({
            text:""
        })
        
    }

    render(){
        return 
        <form onSubmit={this.handleSubmit}>

        <input name="text" type="submit" value={this.state.text} onChange={this.handleChange} placeholder="todo..."/>
        <button onClick={this.handleSubmit}>add todo</button>
        </form>
    }
}