import { Heart, SkipBack, Pause, SkipForward, Volume2 } from 'lucide-react';
import { songs } from '../data/musicData';

function Player() {
  return (
    <div className="h-auto sm:h-20 bg-gray-900 border-t border-gray-800 flex flex-col sm:flex-row items-center px-4 py-3 sm:py-0 gap-4 sm:gap-0">
      <div className="flex items-center sm:w-1/4 w-full">
        <img 
          src={songs[0]?.image || "/api/placeholder/40/40"} 
          alt="Now playing" 
          className="w-10 h-10 rounded mr-3"
        />
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium truncate">Don't Forget Your Roots - 2021</div>
          <div className="text-xs text-gray-400 truncate">BOK SU</div>
        </div>
        <button className="ml-4 text-gray-400 hover:text-white">
          <Heart size={16} />
        </button>
      </div>
      
      <div className="flex flex-col items-center justify-center flex-1 w-full sm:w-auto">
        <div className="flex items-center space-x-4 mb-2">
          <button className="text-gray-400 hover:text-white">
            <SkipBack size={18} />
          </button>
          <button className="bg-white rounded-full p-1 text-black hover:scale-105 transition">
            <Pause size={18} />
          </button>
          <button className="text-gray-400 hover:text-white">
            <SkipForward size={18} />
          </button>
        </div>
        <div className="w-full max-w-xs flex items-center">
          <span className="text-xs text-gray-400 mr-2">1:28</span>
          <div className="h-1 bg-gray-600 rounded-full flex-1 relative">
            <div className="absolute h-full w-1/4 bg-white rounded-full"></div>
          </div>
          <span className="text-xs text-gray-400 ml-2">3:42</span>
        </div>
      </div>
      
      <div className="flex sm:w-1/4 w-full justify-end sm:justify-end items-center">
        <button className="text-gray-400 hover:text-white mr-4">
          <Volume2 size={18} />
        </button>
        <div className="w-24 h-1 bg-gray-600 rounded-full relative">
          <div className="absolute h-full w-3/4 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default Player;