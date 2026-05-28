import { useState } from 'react';
import LivestreamPage from './LivestreamPage';
import Navigation from './Navigation';


export default function LivestreamPlatform() {
 


  const handleCategoryClick = (index) => {
    const updatedCategories = categories.map((cat, i) => ({
      ...cat,
      active: i === index
    }));
    setCategories(updatedCategories);
  };

  return (
    <div className="bg-gray-800 min-h-screen text-white">
      <Navigation 
        categories={categories} 
        onCategoryClick={handleCategoryClick} 
      />
    
      <div className="container mx-auto px-4 py-2">
        <LivestreamPage 
          streamData={streamData} 
          chatMessages={chatMessages} 
        />
        <LivestreamList 
          title="Diğer Canlı Yayınlar" 
          streams={otherStreams} 
        />
      </div>
    </div>
  );
}

