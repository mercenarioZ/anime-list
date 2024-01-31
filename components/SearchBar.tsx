import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 px-4 py-2 border border-gray-700 rounded-md focus:outline-none"
      />
      <button
        type="button"
        className="ml-2 px-4 py-2 bg-neutral-700 text-white rounded-md hover:bg-neutral-600 transition focus:outline-none"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
