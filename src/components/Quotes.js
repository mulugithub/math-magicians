import { useEffect, useState } from 'react';

const Quotes = () => {
  const baseURL = 'https://api.api-ninjas.com/v1/quotes';
  const [quotes, setQuote] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${baseURL}?limit=2&?category=hope`, {
      headers: {
        'X-Api-Key': 'XFhfOEUxAb8ziROpQcmIXw==i6Vdbqw3WLtkON78',
      },
    })
      .then((result) => {
        setLoading(false);
        setError('');
        return result.json();
      })
      .then((data) => setQuote(data))
      .catch((err) => { setError(err); setLoading(false); });
  }, []);

  return (
    <div className="quotes">
      {error && <span className="error">Error while fetching data...</span>}
      {
        quotes.map((quote) => (
          <div className="quotes-wrapper" key={quote.quote}>
            <p className="quote">{quote.quote}</p>
            <small className="author">{quote.author}</small>
          </div>
        ))
        }
      {loading && <div>Loading...</div>}
    </div>
  );
};

export default Quotes;
