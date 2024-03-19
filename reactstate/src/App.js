import React, { useState } from 'react';

import './App.css'; // Make sure the path matches your file structure

// Your App component code...


function App() {
  // Initialize the counter state with 0
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    // Prevent the count from going below 0
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="app">
      <button onClick={decrement}>-</button>
      <span className="counter">{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default App;
