import React, { Component } from 'react';
import './TodoItem.css';

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: this.props.todo.status,
    };
  }
  changeValue = (e) => {
    e && e.preventDefault();
    this.props.onChange({...this.props.todo, status: !this.state.status});
    this.setState({status: !this.state.status})
  };

  render() {
    const { todo } = this.props;
    let isCompleted = this.state.status ===  'completed';
    return (
      <div className="todo-item" onClick={this.changeValue}>
        <div>
          <label className="checkbox-label">
            <input type="checkbox" checked={isCompleted} onChange={this.changeValue} />
            <span className="checkbox-custom rectangular"/>
          </label>
        </div>
        <div className="content">
          <label className={isCompleted ? 'cross-line' : ''}>{todo.content}</label>
        </div>
      </div>
    )
  }
}
