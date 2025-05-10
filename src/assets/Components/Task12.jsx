import React, { useState, lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function Task12() {
  const [show, setShow] = useState(false);
  const [result, setResult] = useState(null);

  const handleClick = async () => {
    const { bigUtility } = await import('./bigUtility');
    const value = bigUtility();
    setResult(value);
    setShow(true);
  };

  return (
    <div>
        <h6>task12</h6>
      <h4>After Code Splitting</h4>
      <button onClick={handleClick}>Load</button>
      <Suspense fallback={<p>Loading component...</p>}>
        {show && <HeavyComponent />}
      </Suspense>
      {result && <p>{result}</p>}
    </div>
  );
}

export default Task12;
