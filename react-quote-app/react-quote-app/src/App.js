// src/App.js
import React from 'react';
import './App.css';
import QuoteFetcher from './QuoteFetcher'; // Import QuoteFetcher component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Quote Generator</h1>
        <QuoteFetcher /> {/* Use QuoteFetcher component */}
      </header>
    </div>
  );
}

export default App;
