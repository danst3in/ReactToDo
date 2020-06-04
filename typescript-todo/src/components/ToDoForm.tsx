import React, { ChangeEvent, FormEvent } from 'react';
const {generate} = require('shortid');

interface TodoFormProps {
    name?:string;
    value?:string;
    placeholder?: string;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>)=>void;
    onSubmit: (e:any)=> void;
}

interface Todo {
    id?:string;
    text:string;
    complete:boolean;
}

type TodoFormState = Todo

type SpecialEvent = {
    id?:string;
    text:string;
    complete:boolean
}
type TodoEvent = SpecialEvent & FormEvent<HTMLFormElement> & EventTarget
// this function helps handle paramaterized keys in TypeScript
const updateState = <T extends string>(key: keyof TodoFormState, value: T) => (
    prevState: TodoFormState
  ): TodoFormState => ({
    ...prevState,
    [key]: value
  })

export default class TodoForm extends React.Component <TodoFormProps,TodoFormState> {

    state:TodoFormState = {
        text:'',
        complete:false
        
    }

    // handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
    //     console.log(e.target.name)
    //     this.setState(updateState(e.target.name , e.target.value))
    // }

    handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
        // console.log(e.target.name)
        this.setState({
            text : e.target.value
        })
    }

    handleSubmit = (e:any):any => {
        e.preventDefault();
        
        // submit the form
        this.props.onSubmit({
            id: generate(),
            text:this.state.text,
            complete:false,
        })
        
        // clear form
        this.setState({
            text:""
        })
        
    }

    render(){
        return (
        <form onSubmit={this.handleSubmit}>

        <input name="text"  value={this.state.text} onChange={this.handleChange} placeholder="todo..."/>
        <button onClick={this.handleSubmit}>add todo</button>
        </form>
        )
    }
}