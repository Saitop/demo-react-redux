import React, {Component} from 'react';
import TodoInput from './TodoInput'
import Todos from './Todos'
import "./Todo.css"
import TodoResouce from "../../api/TodoResouce";

class TodoWrapper extends Component {


  componentDidMount() {
    TodoResouce.getAll()
      .then(res => res.json())
      .then(res => {
        console.log(res._embedded.todos)
        this.props.refreshTodos(res._embedded.todos)

      })
    // console.log('props ', this.props.todos)
  }

  addNewTodo = newTodoContent => {
    if(newTodoContent) {
      this.props.createNewTodo({content: newTodoContent, status: 'active'});
    }
  };

  render() {
    return (
      <div className="todo-wrapper">
        <TodoInput onNewTodoAdded={this.addNewTodo}/>
        <Todos todos={this.props.todos}/>
      </div>
    )
  }
}

export default TodoWrapper;
