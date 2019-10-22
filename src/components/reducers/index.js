import counterReducer from "./counter";
import loginedReducer from "./login";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  isLogined: loginedReducer
});

export default rootReducer;
