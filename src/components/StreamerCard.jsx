import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function StreamerCard({ streamer }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg text-white w-full max-w-sm">
      <div className="flex justify-center items-center space-x-2">
        <img
          src={streamer.avatar}
          alt={streamer.streamer}
          className="w-6 h-6 rounded-full object-cover"
        />
        <div className="text-left">
          <h3 className="text-sm font-semibold truncate">{streamer.name}</h3>
          <div className="flex items-center text-yellow-400">
            <FaStar />
            <span className="ml-1 text-xs">{streamer.rating}</span>
          </div>
        </div>
      </div>
      <br className="my-3 border-t border-gray-700" />
      <p className="text-xs text-gray-400 text-left">{streamer.topics.join(", ")}</p>
    </div>
  );
}