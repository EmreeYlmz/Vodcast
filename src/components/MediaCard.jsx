import React from 'react';

function MediaCard({ title, type, image, duration, creator, stats, avatar }) {
  return (
    <div className="bg-backgraund rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative aspect-[16/9]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 px-1.5 py-0.5 text-xs rounded">
          {duration}
        </div>
        <div className="absolute top-2 left-2 bg-blue-500 bg-opacity-90 px-2 py-1 rounded text-xs">
          {type}
        </div>
      </div>
      <div className="p-3 space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-sm truncate">{title}</h3>
          <span className="text-xs text-gray-400">{type}</span>
        </div>
        <div className="flex items-center">
          <img
            src={avatar}
            alt={creator}
            className="w-6 h-6 rounded-full mr-2 object-cover"
          />

          <div>
            <p className="text-xs text-gray-300">{creator}</p>
            <p className="text-xs text-gray-400">{stats}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MediaCard;

