import React from 'react';

function CategoryButton({ text, active = false }) {
  return (
    <button 
      className={`px-4 py-1 rounded-full text-sm ${
        active ? 'bg-white text-black' : 'bg-gray-700 text-white hover:bg-gray-600'
      }`}
    >
      {text}
    </button>
  );
}

export default CategoryButton;