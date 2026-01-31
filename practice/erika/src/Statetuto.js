import React, { useState } from "react";

const StateTuto = () => {
  const [counter, setCounter] = useState(1);
  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      {counter}
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default StateTuto;
