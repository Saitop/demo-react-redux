import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, dividedBy, increment, multiply, reset} from "../../actions";
import './Counter.css';


function CounterWithReduxState() {
  const counter = useSelector(state => state.counter);
  const isLogin = useSelector(state => state.isLogined);
  const dispatch = useDispatch();
  console.log(counter, isLogin)

  return (
    <div className="counter">
      <span>{counter}</span>
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(multiply(2))}>*2</button>
      <button onClick={()=>dispatch(dividedBy(2))}>/2</button>
      <button onClick={()=>dispatch(reset(2))}>R</button>
    </div>
  )
}

export default CounterWithReduxState;
