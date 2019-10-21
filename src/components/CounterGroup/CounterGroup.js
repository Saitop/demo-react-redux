import React, { Component } from 'react';
import Counter from "../Counter/Counter";

class CounterGroup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let counters = [];
    for (let count = 0; count < this.props.defaultCounts; count ++ ) {
      counters.push(
        <Counter />
      )
    }
    return (
      <div>
        <input type="text"/>
        <button>Regenrate counters</button>
        <span>Sum: 0</span>
        {counters}
      </div>
    );
  }
}
export default CounterGroup;
