import React, { useState } from 'react';
import axios from 'axios';
import './TwitterSentimentAnalysis.css';

const TwitterSentimentAnalysis = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(`https://api.twitter.com/2/tweets/search/recent?query=${encodeURIComponent(query)}&max_results=10`);
      // Perform sentiment analysis on the tweets (implement this part)
      // For demonstration, let's assume the sentiment analysis result is positive
      setResult('Sentiment analysis result');
    } catch (error) {
      setResult('Error occurred while fetching tweets');
    }
    setLoading(false);
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Twitter Sentiment Analysis</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="query">Enter Keywords or Twitter Usernames (separated by commas):</label>
          <input
            type="text"
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
          <button type="submit">Analyze</button>
        </form>
        {loading && <div>Loading...</div>}
        {result && <div>{result}</div>}
      </div>
    </div>
  );
};

export default TwitterSentimentAnalysis;