import React from 'react';
import { recentPosts } from '../data/recentPosts'; // recentPosts verisini içe aktardık
import { formatDate } from '../utils/formatDate'; // formatDate fonksiyonunu içe aktardık

export default function RecentPosts() {
  return (
    <section className="mb-8">
      <h3 className="text-lg font-medium mb-4">En Yeniler</h3>
      {recentPosts.map(post => (
        <div key={post.id} className="mb-4">
          <div className="flex items-center mb-1">
            <img src={post.authorImage} alt={post.author} className="w-6 h-6 rounded-full mr-2" />
            <span className="text-sm">{post.author}</span>
            {/* Tarih formatlama */}
            <span className="text-xs text-gray-400 ml-2">{formatDate(post.date)}</span>
          </div>
          <h4 className="font-medium mb-1">{post.title}</h4>
          <p className="text-xs text-gray-400">{post.excerpt}</p>
        </div>
      ))}
    </section>
  );
}
