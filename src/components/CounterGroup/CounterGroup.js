import React, { Component } from 'react';
import PureCounter from "../Counter/PureCounter";
import './CounterGroup.css'
import { connect } from "react-redux";

class CounterGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // counterSum: 0,   move this state to ./reducer which can do the data logic and return the new state to mapStateToProps
      // counterArr: new Array(parseInt(this.props.defaultCounts))
      //   .fill(0)
      //   .map(() => ({ count: 0, id: this.generateID() })),
      inputValue: this.props.defaultCount
    };
  }

  componentDidMount() {
    this.props.genrateCounters(this.props.defaultCount);
  }

  regenrateCounters = () => {
    this.props.genrateCounters(this.state.inputValue);
    this.props.clearCounterSum();
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value});
  };

  render() {
    return (
      <div className="counter-group">
        <div className="regenerate" >
          <input type="text" value={this.state.inputValue} onChange={this.handleInputChange} />
          <button onClick={this.regenrateCounters}>
            Regenerate Counters
          </button>
          <span>Sum：{this.props.counterSum}</span>
        </div>
        <div>
          {this.props.counterArr.map(counterItem => (
            <PureCounter
              key={counterItem.id}
              id={counterItem.id}
              countValue={counterItem.count}
              onCounterValueChanged={this.props.counterUpdateCallback}
              onClickIncreased={this.props.increaseNumber}
              onClickDecreased={this.props.decreaseNumber}
            />
          ))}
        </div>
      </div>
    );
  }

}

export default CounterGroup;
