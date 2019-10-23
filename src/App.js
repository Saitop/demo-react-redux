import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Counter from "./components/Counter/Counter";
import CounterWithReduxState from "./components/Counter/CounterWithReduxState";
import CounterGroupContainer from "./containers/CounterGroupContainer";
import TodoContainer from './containers/TodoContainer'

function App() {
  return (
    <div className="App">
      {/*<CounterWithReduxState/>*/}
      <Router>
        <div className="header">
          <ul className="link">
            <li>
              <Link to="/todo-list">Todo list</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/counter-with-redux">Counter with Redux</Link>
            </li>
            <li>
              <Link to="/counterGroup">Counter Group</Link>
            </li>
          </ul>

          <hr />

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path="/todo-list">
              <TodoContainer />
            </Route>
            <Route path="/counter">
              <Counter />
            </Route>
            <Route path="/counter-with-redux">
              <CounterWithReduxState />
            </Route>
            <Route path="/counterGroup">
              <CounterGroupContainer  defaultCount={3} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
