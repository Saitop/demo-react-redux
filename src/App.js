import React from 'react';
import './App.css';
// import CounterGroup from "./components/CounterGroup/CounterGroup";
// import Counter from "./components/Counter/Counter";
// import CounterWithReduxState from "./components/Counter/CounterWithReduxState";
// import CounterGroupContainer from "./containers/CounterGroupContainer";
import TodoWrapper from './components/Todo/TodoWrapper';

function App() {
  return (
    <div className="App">
      {/*<Counter />*/}
      {/*<CounterGroupContainer defaultCount={3} />*/}
      {/*<CounterWithReduxState/>*/}
      <TodoWrapper />
    </div>
  );
}

export default App;
