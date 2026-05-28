import React from 'react';
import { Play } from 'lucide-react';
import { artistSidebar } from '../../data/musicData';
import { useNavigate } from 'react-router-dom';

function ListenNowSidebar() {
  const navigate = useNavigate();

  return (
    <div className="w-64 bg-background border-l border-gray-800 p-4 flex flex-col">
      <div className="mb-6">
        <h2 className="text-lg font-bold">Dinlemeye Devam Et</h2>
      </div>

      {artistSidebar.map((item, i) => (
        <div
          key={i}
          onClick={() => navigate(`/music/${item.id}`)}
          className="mb-6 bg-background rounded-lg overflow-hidden relative group cursor-pointer"
        >
          <img 
            src={item?.image}  
            alt={item?.title} 
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-3">
            <div className="text-sm font-medium">{item?.title}</div>
            <div className="text-xs text-gray-400">{item?.artist}</div>
          </div>
          <button className="absolute bottom-3 right-3 bg-green-500 rounded-full p-2 opacity-0 shadow-lg transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <Play size={18} fill="black" className="text-black" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default ListenNowSidebar;