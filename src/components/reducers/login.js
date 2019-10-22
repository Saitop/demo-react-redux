
const loginedReducer = (state = false, action ) => {
  switch (action.type ) {
    case 'LOG_IN':
      return true;
    default:
      return false;
  }
};

export default  loginedReducer;
