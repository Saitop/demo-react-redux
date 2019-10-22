import React from 'react';
import './App.css';
// import CounterGroup from "./components/CounterGroup/CounterGroup";
// import Counter from "./components/Counter/Counter";
import CounterWithReduxState from "./components/Counter/CounterWithReduxState";

function App() {
  return (
    <div className="App">
      {/*<Counter />*/}
      {/*<CounterGroup defaultCounts={3} />*/}
      <CounterWithReduxState/>
    </div>
  );
}

export default App;
