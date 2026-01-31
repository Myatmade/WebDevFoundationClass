import React, { useState } from "react";

const StateTuto2 = () => {
  const [inputValue, setInputValue] = useState("Erika");
  let onChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <input placeholder="Enter text here" onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default StateTuto2;
