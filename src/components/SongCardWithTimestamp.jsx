import React, { useState } from 'react';
import { Heart, MoreHorizontal } from 'lucide-react';  // İkonlar için
import { useNavigate } from 'react-router-dom';

function SongCardWithTimestamp({ song }) {
  const [isPlaying, setIsPlaying] = useState(false); 
  const navigate = useNavigate();
  if (!song) return null;

  return (
    <div
      className="bg-gray-800 rounded-lg p-3 flex items-center hover:bg-gray-700 transition duration-300 group w-full cursor-pointer"
      onClick={() => navigate(`/music/${song.id}`)}
    >
      <div className="relative flex-shrink-0 w-12 h-12 bg-gray-700 rounded mr-3">
        <img 
          src={song.image || "/api/placeholder/50/50"} 
          alt="Song cover" 
          className="w-full h-full object-cover rounded"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsPlaying(!isPlaying);
          }}
          className="absolute inset-0 flex items-center justify-center bg-black/50 text-white opacity-0 group-hover:opacity-100 transition"
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium truncate">{song.title}</div>
        <div className="text-xs text-gray-400 truncate">{song.artist}</div>
      </div>
      <div className="text-xs text-gray-400 mr-2">
        {song.days} {song.days > 1 ? 'days' : 'day'} ago
      </div>
      <div className="flex items-center space-x-2">
        <button className="text-gray-400 hover:text-white" onClick={(e) => e.stopPropagation()}>
          <Heart size={16} />
        </button>
        <button className="text-gray-400 hover:text-white" onClick={(e) => e.stopPropagation()}>
          <MoreHorizontal size={16} />
        </button>
      </div>
    </div>
  );
}

export default SongCardWithTimestamp;