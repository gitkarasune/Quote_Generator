import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './Components/Loading'
import Button from './Components/Button';
import HeaderQuote from './Components/HeaderQuote';
import FetchError from './Components/FetchError';
import Footer from './Components/Footer';

const App = () => {

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchQuote = async () => {
    setIsLoading(true);
    setError(false);
    try {
      const response = await axios.get('https://api.quotable.io/random');

      if (response.data && response.data.content && response.data.author) {
        setQuote(response.data.content);
        setAuthor(response.data.author);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (error) {
      console.error('Error fetching quote:', error);
      setError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

   
  return (
    <>
      <HeaderQuote fetchQuote={fetchQuote} />

      <div className="min-h-screen flex  items-center justify-center bg-whitemin-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h1  className="text-3xl font-bold mb-6 text-center text-gray-800">Random Quote Generator</h1>
          <div className="mb-6 h-60">
            {isLoading ? (
              <Loading/>
            )  : error ? (
              <FetchError onRetry={fetchQuote} />
            ) : (
              <div className='flex justify-center items-center h-36'>
                <p className="text-xl font-semibold mb-2 text-gray-700">{quote || 'No quote available'}</p>
                <p className="text-right text-gray-600 italic">- {author || 'Unknown'}</p>
              </div>
            )}
          </div>
          <Button fetchQuote={fetchQuote} />
        </div>
      </div>

      <Footer />
    </>
    
    
  );
  
}


export default App
