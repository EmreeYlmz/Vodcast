import React from 'react';
import { writers } from '../data/writers'; // writers verisini içe aktardık


export default function SuggestedWriters() {
  return (
    <section>
      <h3 className="text-lg font-medium mb-4">Takip Edebileceğin Yazarlar</h3>
      {writers.map(writer => (
        <div key={writer.id} className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img src={writer.image} alt={writer.name} className="w-10 h-10 rounded-full mr-2" />
            <div>
              <p className="font-medium text-sm">{writer.name}</p>
              <p className="text-xs text-gray-400">{writer.description}</p>
            </div>
          </div>
          <button className="bg-gray-700 text-white rounded-full px-3 py-1 text-xs flex items-center">
            <span className="mr-1">+</span> Takip Et
          </button>
        </div>
      ))}
    </section>
  );
}