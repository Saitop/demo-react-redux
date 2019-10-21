import React, { Component } from 'react';
import Counter from "../Counter/Counter";
import './CounterGroup.css'

class CounterGroup extends Component {
  constructor(props) {
    super(props);
    // this.handleInputChange.bind(this);
    this.state = {
      counterCounts: this.props.defaultCounts,
      inputValue: this.props.defaultCounts,
      sum: 0
    }
  }

  counterUpdateCallback = changeNum => {
    console.log("changeNum", changeNum);
    this.setState({ sum: this.state.sum + changeNum })
  };
  handleInputChange = (event) => {
    this.setState({inputValue: event.target.value});
    console.log("inputValue = ", this.state.inputValue);
  };
  regernateCounters = () =>  {
    this.setState({counterCounts: this.state.inputValue})
  };
  renderCounters = () => {
    const { counterCounts } = this.state;
    return Array.of(0, counterCounts)
      .map((count) => (
        <Counter
          key={count}
          onCounterValueChange={this.counterUpdateCallback}
        />
        )
      );
  };
  render() {
    const counters = this.renderCounters();
    return (
      <div className="counter-group">
        <div className="regenerate">
          <input type="text" value={this.state.inputValue}
                 onChange={this.handleInputChange}/>
          <button onClick={this.regernateCounters}>Regenrate counters</button>
          <span>Sum: {this.state.sum}</span>
        </div>
        <div>
          {counters}
        </div>
      </div>
    );
  }


}
export default CounterGroup;
