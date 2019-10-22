
// Reducer
const counterReducer = (state = 0, action ) => {
  switch (action.type) {
    case 'INCREMENT':
      return state +1;
    case 'DECREMENT':
      return state - 1;
    case 'MULTIPLICATION':
      return state * action.payload;
    case 'DIVISION':
      return state / action.payload;
    case 'RESET':
      return 0;
    default:
      return state;
  }
};

export default counterReducer;
