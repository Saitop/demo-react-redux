import {connect} from "react-redux";
import CounterGroup from "../components/CounterGroup/CounterGroup";

const mapStateToProps = state => ({
  counterSum: state.counterGroup.counterSum,
  counterArr: state.counterGroup.counterArr
});
// counterSum is a prop in CounterGroup, it will give counterSum a new value of state.counterSum whitch come from ./reducer switch return
// you try to imagine counterSum will be passed to this.props.counterSum in CounterGroup like the result of <CounterGroup counterSum={state.counterSum}/>

// connect(mapStateToProps)(CounterGroup);
const mapDispatchToProps = dispatch => ({
  decreaseNumber: (changedNum, id) =>
    dispatch({
      type: "DECREASE",
      payload: { changedNum, id }
    }),
  increaseNumber: (changedNum, id) =>
    dispatch({
      type: "INCREASE",
      payload: { changedNum, id }
    }),
  counterUpdateCallback: changedNum =>
    dispatch({
      type: "COUNTER_SUM",
      payload: changedNum
    }),
  genrateCounters: counterNum =>
    dispatch({
      type: "GENERATECOUNTERS",
      payload: parseInt(counterNum)
    }),
  clearCounterSum: () =>
    dispatch({
      type: "CLEARSUM"
    })
});

//let CounterGroup and Redux know each other
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterGroup);
