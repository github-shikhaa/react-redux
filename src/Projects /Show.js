import React, { useState, useMemo } from 'react';

const MyComponent = () => {
  // State variables
  const [number, setNumber] = useState(0);

  // Expensive calculation function
  const expensiveCalculation = (input) => {
    // Some expensive calculation logic
    console.log('Calculating...');
    return input * 2;
  };

  // Memoized result using useMemo
  const memoizedResult = useMemo(() => {
    return expensiveCalculation(number);
  }, [number]); // Only recompute if 'number' changes

  return (
    <div>
      <h2>MyComponent</h2>
      <p>Number: {number}</p>
      <p>Result: {memoizedResult}</p>
      <button onClick={() => setNumber(number + 1)}>
        Increment Number
      </button>
    </div>
  );
};

export default MyComponent;
