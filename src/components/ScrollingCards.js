import React, { useEffect, useState } from 'react';
import Header from './Header';

const ScrollingCards = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('https://api.publicapis.org/entries')
      .then((response) => response.json())
      .then((data) => setData(data.entries))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-gray-100 p-4">
          <div className="flex overflow-x-auto">
            {data.map((entry, index) => (
              <div
                key={index}
                className="w-64 bg-white p-4 rounded-lg shadow-md mr-4"
              >
                <h2 className="text-xl font-semibold mb-2">{entry.API}</h2>
                <p className="text-gray-600">{entry.Description}</p>
                <a
                  href={entry.Link}
                  className="text-blue-500 hover:underline mt-2 block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  API Documentation
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollingCards;
