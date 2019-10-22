// Action {type: 'INCREMENT', payload: data}
export const increment = () => {
  return {
    type: 'INCREMENT'
  }
};
export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
};

export const multiply = num => {
  return {
    type: 'MULTIPLICATION',
    payload: num
  }
};

export const dividedBy = num => {
  return {
    type: 'DIVISION',
    payload: num
  }
};
export const reset = () => {
  return {
    type: 'RESET'
  }
};

