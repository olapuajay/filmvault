import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DetailsModal from './DetailsModal'

function SearchComponent({ watchlist, handleAddToWatchlist, handleRemoveFromWatchlist }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if(query.length > 0) {
      fetchResults();
    } else {
      setResults([]);
    }
  }, [query]);

  const fetchResults = async () => {
    try {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const response = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}`);
      setResults(response.data.results);
    } catch (error) {
      console.error('Error fetching search results: ', error);
    }
  };

  return (
    <div className="md:w-full w-14 max-w-sm min-w-[180px]">
      <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-transparent placeholder:text-gray-300 text-white text-sm border border-gray-300 rounded-md pl-3 pr-16 py-2 transition duration-300 ease focus:outline-none focus:border-white hover:border-sky-600 shadow-sm focus:shadow"
          placeholder="Search" 
        />
        <button type='submit' className="absolute right-3 text-gray-300">
          <Search size={20} />
        </button>
      </form>

      {results.length > 0 && (
        <ul className='absolute top-full left-0 w-full bg-gray-800 text-white mt-1 rounded-md shadow-lg z-50 max-h-60 overflow-y-auto'>
          {results.map((item) => (
            <li
              key={item.id}
              className='p-2 border-b border-gray-700 hover:bg-gray-700 cursor-pointer transition'
              onClick={() => setSelectedItem(item)}
            >
              {item.title || item.name}
            </li>
          ))}
        </ul>
      )}

      {selectedItem && (
        <DetailsModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
          watchlist={watchlist}
          handleAddToWatchlist={handleAddToWatchlist}
          handleRemoveFromWatchlist={handleRemoveFromWatchlist}
        />
      )}
    </div>
  )
}

export default SearchComponent
