import React from 'react';

function ContinueWatchingCard({ title, type, creator, stats, progress, image }) {
  return (
    <div className="space-y-1">
      <img
        src={image}
        alt={title}
        className="w-full h-28 object-cover rounded"
      />
      <div className="w-full bg-gray-700 h-1 rounded-full">
        <div
          className="bg-blue-500 h-1 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex justify-between text-xs">
        <span>{title} | {type}</span>
        <span className="text-blue-400">LIVE</span>
      </div>
      <p className="text-xs text-gray-400">{creator}</p>
      <p className="text-xs text-gray-400">{stats}</p>
    </div>
  );
}

export default ContinueWatchingCard;
