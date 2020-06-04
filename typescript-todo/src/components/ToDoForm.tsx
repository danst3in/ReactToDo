import React, { ChangeEvent, FormEvent, ReactNode } from "react";
const { generate } = require("shortid");

interface TodoFormProps {
  // name?:string;
  // value?:string;
  // placeholder?: string;
  // handleChange?: (e: React.ChangeEvent<HTMLInputElement>)=>void;
  onSubmit: (e: any) => void;
}

export interface Todos {
  id?: string;
  text: string;
  complete: boolean;
  [x: string]: any;
}

type TodoFormState = Todos;

// trying to avoid onSubmit being type any
// type SpecialEvent = {
//     id?:string;
//     text:string;
//     complete:boolean
// }
// type TodoEvent = SpecialEvent & FormEvent<HTMLFormElement> & EventTarget

export default class TodoForm extends React.Component<
  TodoFormProps,
  TodoFormState
> {
  state: TodoFormState = {
    text: "",
    complete: false,
  };

  // handleChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
  //     console.log(e.target.name)
  //     this.setState(updateState(e.target.name , e.target.value))
  // }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // console.log(e.target.name)
    // console.log(
    //   "e.target,e.currentTarget ",
    //   e.target.name,
    //   e.currentTarget.name
    // );
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e: any): any => {
    e.preventDefault();
    // console.log("e.target,e.currentTarget ", e.target, e.currentTarget);
    // submit the form
    this.props.onSubmit({
      id: generate(),
      text: this.state.text,
      complete: false,
    });
    console.log(this.state);

    // clear form
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="todo..."
        />
        <button onClick={this.handleSubmit}>add todo</button>
      </form>
    );
  }
}
