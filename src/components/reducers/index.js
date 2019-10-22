import counterReducer from "./counter";
import loginedReducer from "./login";
import {combineReducers} from "redux";
import counterGroupReducer from "./counterGroup";

const rootReducer = combineReducers({
  counter: counterReducer,
  isLogined: loginedReducer,
  counterGroup: counterGroupReducer,
});

export default rootReducer;
