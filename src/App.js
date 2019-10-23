import React from 'react';
import './App.css';
// import Counter from "./components/Counter/Counter";
// import CounterWithReduxState from "./components/Counter/CounterWithReduxState";
// import CounterGroupContainer from "./containers/CounterGroupContainer";

import TodoContainer from './containers/TodoContainer'
function App() {
  return (
    <div className="App">
      {/*<Counter />*/}
      {/*<CounterGroupContainer defaultCount={3} />*/}
      {/*<CounterWithReduxState/>*/}
      <TodoContainer />
    </div>
  );
}

export default App;
