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

export const counterSumAction = (changedNum) => {
  return { //this dispatch will wuto inject by connect() method
    type: "COUNTER_SUM",
      payload: changedNum
  }
};

export const generateCoutner = counterNum => {
  return {
    type: "GENERATECOUNTERS",
    payload: parseInt(counterNum)
  }
}

