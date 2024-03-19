// src/QuoteFetcher.js
import React, { useState, useEffect } from 'react';

/* const [quote, setQuote] = useState('');: Initializes state variable 
  quote with an empty string. setQuote is the function to update this state. 
  This state will store the quote text fetched from the API. */

function QuoteFetcher() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

    useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch((error) => console.error('Error fetching quote:', error));
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <p>"{quote}"</p>
      <p>- {author}</p>
    </div>
  );
}

export default QuoteFetcher;
