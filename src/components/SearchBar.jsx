import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

const SearchBar = ({ onSearch, onLocation }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full relative">
      <div className="relative flex items-center">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search location..."
          className="w-full bg-[#09090b] border border-zinc-800 text-zinc-100 placeholder-zinc-500 px-4 py-2.5 pr-20 rounded-xl outline-none focus:border-zinc-600 transition-colors text-sm"
        />
        <button
          type="button"
          onClick={onLocation}
          className="absolute right-10 p-1.5 text-zinc-500 hover:text-zinc-300 transition-colors"
          title="Current location"
        >
          <MapPin size={16} />
        </button>
        <button
          type="submit"
          className="absolute right-2 p-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg transition-colors border border-zinc-700"
          title="Search"
        >
          <Search size={14} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
