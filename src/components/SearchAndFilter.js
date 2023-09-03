import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchAndFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOption, setFilterOption] = useState('all');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // جلب البيانات من API عند تحميل الصفحة
    axios
      .get('https://api.publicapis.org/entries')
      .then((response) => {
        setData(response.data.entries);
        setFilteredData(response.data.entries);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterOption(event.target.value);
  };

  const applyFilterAndSearch = () => {
    // تطبيق البحث
    let filteredResult = data;

    if (filterOption !== 'all') {
      filteredResult = data.filter((item) => item.Category === filterOption);
    }

    if (searchTerm.trim() !== '') {
      filteredResult = filteredResult.filter((item) =>
        item.API.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredData(filteredResult);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md w-100 text-center">
        <h2 className="text-2xl font-semibold mb-4">Search and Filter</h2>
        <div className="items-center space-x-2 text-center">
          <input
            type="text"
            placeholder="Search..."
            className="border rounded-md px-2 py-1"
            value={searchTerm}
            onChange={handleSearchChange}
          />

          <select
            className="border rounded-md px-2 py-1"
            value={filterOption}
            onChange={handleFilterChange}
          >
            <option value="all">All</option>
            <option value="Animals">Animals</option>
            <option value="Health">Health</option>
            {/* يمكنك إضافة المزيد من الفلاتر هنا */}
          </select>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={applyFilterAndSearch}
          >
            Search & Filter
          </button>
        </div>

        <div className="flex overflow-x-scroll mt-4">
          {filteredData.map((entry, index) => (
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
  );
};

export default SearchAndFilter;
