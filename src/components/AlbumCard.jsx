import React from 'react';
import { Play } from 'lucide-react';


function AlbumCard({ title, artist, image }) {

  
  return (
    <div className="bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition duration-300 group relative">
      <div className="relative">
        <div className="aspect-square bg-gray-700 rounded-md overflow-hidden mb-2">
          <img 
            src= {image}
            alt="Album cover" 
            className="w-full h-full object-cover"
          />
        </div>
        <button className="absolute bottom-2 right-2 bg-green-500 rounded-full p-2 opacity-0 shadow-lg transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <Play size={18} fill="black" className="text-black" />
        </button>
      </div>
      <div className="text-sm font-medium truncate">Daily Mix {Math.floor(Math.random() * 4) + 1}</div>
      <div className="text-xs text-gray-400 truncate">{artist}</div>
    </div>
  );
}
export default AlbumCard;