import React, { Component } from 'react';
import './Counter.css';

class PureCounter extends Component {
  increaseNumber = () => {
    this.props.onCounterValueChanged(1);
    this.props.onClickIncreased(1, this.props.id);
  };

  decreaseNumber = () => {
    this.props.onCounterValueChanged(-1);
    this.props.onClickDecreased(1, this.props.id);
  };

  render() {
    return (
      <div className="counter">
        <button onClick={this.increaseNumber}>+</button>
        <span>{this.props.countValue}</span>
        <button onClick={this.decreaseNumber}>-</button>
      </div>
    );
  }
}

export default PureCounter;
