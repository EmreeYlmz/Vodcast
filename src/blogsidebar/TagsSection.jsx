import React from 'react';
import { tags } from '../data/tags'; // tags verisini içe aktardık

export default function TagsSection() {
  return (
    <section className="mb-8">
      <h3 className="text-lg font-medium mb-4">Önerilen Konular</h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="bg-gray-700 text-gray-300 rounded-full px-3 py-1 text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}