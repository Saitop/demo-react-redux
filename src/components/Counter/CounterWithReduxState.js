import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../actions";
import './Counter.css';


function CounterWithReduxState() {
  const counter = useSelector(state => state.counter);
  const isLogin = useSelector(state => state.isLogined);
  const dispatch = useDispatch();
  console.log(counter, isLogin)

  return (
    <div className="counter">
      <button onClick={()=>dispatch(increment())}>+</button>
      <span>{counter}</span>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}

export default CounterWithReduxState;
