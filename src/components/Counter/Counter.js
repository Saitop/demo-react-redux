import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increaseNumber = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decreaseNumber = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="counter">
        <button onClick={this.increaseNumber}>+</button>
        <span>{this.state.count}</span>
        <button onClick={this.decreaseNumber}>-</button>
      </div>
    );
  }
}

export default Counter;

