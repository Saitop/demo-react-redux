import React, { useState } from 'react';

function FunctionalCounter(props) {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <button onClick={() => setCount(count + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  )

}

export default FunctionalCounter;
