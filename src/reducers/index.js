import counterReducer from "./counter";
import loginedReducer from "./login";
import {combineReducers} from "redux";
import counterGroupReducer from "./counterGroup";
import todoReducer from './todo'

const rootReducer = combineReducers({
  counter: counterReducer,
  isLogined: loginedReducer,
  counterGroup: counterGroupReducer,
  todoPage: todoReducer,
});

export default rootReducer;
