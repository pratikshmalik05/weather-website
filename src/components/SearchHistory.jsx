import React from 'react';
import { History, X } from 'lucide-react';

const SearchHistory = ({ history, onSelect, onClear }) => {
  if (!history || history.length === 0) return null;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xs uppercase tracking-widest font-semibold text-zinc-500 flex items-center gap-2">
          <History size={14} /> Recent
        </h3>
        <button
          onClick={onClear}
          className="text-zinc-600 hover:text-zinc-400 transition-colors text-xs flex items-center gap-1 font-medium uppercase tracking-wider"
        >
          <X size={12} /> Clear
        </button>
      </div>
      <div className="flex flex-col gap-2">
        {history.map((city, index) => (
          <button
            key={index}
            onClick={() => onSelect(city)}
            className="px-4 py-3 bg-[#09090b] hover:bg-zinc-800 text-zinc-300 rounded-xl text-sm transition-colors border border-zinc-800 text-left w-full flex justify-between items-center group"
          >
            <span>{city}</span>
            <span className="text-zinc-600 group-hover:text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity text-xs">&rarr;</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchHistory;
