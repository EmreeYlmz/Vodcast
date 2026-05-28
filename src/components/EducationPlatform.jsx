import { useState } from 'react';
import LiveStreamCard from './LiveStreamCard';
import StreamerList from './StreamerList';
import LiveNavigation from './LiveNavigation';
import {
  popularStreams,
  popularStreamers,
  categories,
  subcategories,
} from '../data/liveStream';
import StreamerCard from './StreamerCard';

export default function EducationPlatform() {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div className="min-h-screen bg-background text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8">
          <div className="flex items-center text-lg mb-4">
            <span className="font-semibold">Eğitim</span>
            <span className="mx-2 text-gray-400">{'>'}</span>
            <span className="text-blue-400">Yazılım Geliştirme</span>
          </div>
        </div>

        {/* Üst Navigasyon */}
        <LiveNavigation
          activeCategory={activeCategory}
          onCategoryClick={setActiveCategory}
          categories={categories}
          subcategories={subcategories}
        />
        {/* Popüler Yayın Konuları */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Popüler Yayın Konuları</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <button className="bg-gray-900 hover:bg-gray-700 py-2 px-4 rounded-md">Phyton</button>
          <button className="bg-gray-900 hover:bg-gray-700 py-2 px-4 rounded-md">Java</button>
          <button className="bg-gray-900 hover:bg-gray-700 py-2 px-4 rounded-md">Veri Bilimi</button>
          <button className="bg-gray-900 hover:bg-gray-700 py-2 px-4 rounded-md">JavaScript</button>
          <button className="bg-gray-900 hover:bg-gray-700 py-2 px-4 rounded-md col-span-2 md:col-span-1">Yapay Zeka (AI)</button>
          <button className="bg-gray-900 hover:bg-gray-700 py-2 px-4 rounded-md">Angular</button>
          <button className="bg-gray-900 hover:bg-gray-700 py-2 px-4 rounded-md">SQL</button>
          <button className="bg-gray-900 hover:bg-gray-700 py-2 px-4 rounded-md">Unity</button>
        </div>
      </div>

        {/* Popüler Yayıncılar */}
        <h2 className="text-xl font-semibold mb-4">Popüler Yayıncılar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {popularStreamers.map((streamer, index) => (
            <StreamerCard key={index} streamer={streamer} />
          ))}
        </div>

        {/* Popüler Yayınlar */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Popüler Yayınlar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularStreams.map((stream, index) => (
              <LiveStreamCard key={index} stream={stream} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}