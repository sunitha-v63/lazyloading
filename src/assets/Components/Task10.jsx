import React, { useState } from 'react';

function Task10() {
  const [result, setResult] = useState(null);

   const handleClick = async () => {
    try {
      const module = await import('../Components/Calculate');
      const value = module.expensiveCalculation(5, 10);
      setResult(value);
    } catch (error) {
      console.error("Failed to load calculate module:", error);
    }
  };

  return (
    <div>
        <h6>task9,10</h6>
      <h3>Dynamic Import</h3>
      <button onClick={handleClick}>Calculation</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
}

export default Task10;
