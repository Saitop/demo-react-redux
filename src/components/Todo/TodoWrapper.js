import React, {Component} from 'react';
import TodoInput from './TodoInput'
import Todos from './Todos'
import "./Todo.css"

class TodoWrapper extends Component {

  state = { todos: [] };

  addNewTodo = newTodoContent => {
    if(newTodoContent) {
      // this.props.addNewTodo({content: newTodoContent, status: false});
      this.state.todos.push({content: newTodoContent, status: false});
    }
    this.setState({todos: this.state.todos})
  };

  render() {
    return (
      <div className="todo-wrapper">
        <TodoInput onNewTodoAdded={this.addNewTodo}/>
        <Todos todos={this.state.todos}/>
      </div>
    )
  }
}

export default TodoWrapper;
