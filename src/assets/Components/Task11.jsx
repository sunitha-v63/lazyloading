
import React, { useState } from 'react';

function Task11() {
  const [result, setResult] = useState(null);

  const handleClick = async () => {
    const { multiply } = await import('./Calculate');
    const value = multiply(5, 10);
    setResult(value);
  };

  return (
    <div>
    <h6>task11</h6>
      <h4>Code Splitting with Functions</h4>
      <button onClick={handleClick}>Multiply Numbers</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
}

export default Task11;
