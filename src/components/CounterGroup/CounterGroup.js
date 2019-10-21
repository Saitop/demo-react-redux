import React, { Component } from 'react';
import Counter from "../Counter/Counter";
import './CounterGroup.css'

class CounterGroup extends Component {
  constructor(props) {
    super(props);
    // this.handleInputChange.bind(this);
    this.state = { counterCounts: this.props.defaultCounts, inputValue: this.props.defaultCounts}
  }

  handleInputChange = (event) => {
    this.setState({inputValue: event.target.value})
    console.log("inputValue = ", this.state.inputValue)
  };
  regernateCounters = () =>  {
    this.setState({counterCounts: this.state.inputValue})
  };
  render() {
    let counters = [];
    for (let count = 0; count < this.state.counterCounts; count ++ ) {
      counters.push(
        <Counter />
      )
    }
    return (
      <div className="counter-group">
        <div className="regenerate">
          <input type="text" value={this.state.inputValue} onChange={this.handleInputChange}/>
          <button onClick={this.regernateCounters}>Regenrate counters</button>
          <span>Sum: 0</span>
        </div>
        <div>
          {counters}
        </div>
      </div>
    );
  }
}
export default CounterGroup;
