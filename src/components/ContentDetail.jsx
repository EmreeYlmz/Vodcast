import React, { useState } from 'react';
import { ThumbsUp, MessageSquare, Download, Share2, Bookmark, MoreHorizontal, Play, Pause, Volume2, Maximize2, User } from 'lucide-react';

function ContentDetail({ content, comments, onBackClick }) {
  const [isPlaying, setIsPlaying] = useState(false);
  
  const togglePlay = () => setIsPlaying(!isPlaying);
  
  return (
    <div className="h-full">
      <div>
        <button 
          className="mb-4 flex items-center text-gray-300 hover:text-white"
          onClick={onBackClick}
        >
          <span>&#10094;</span>
          <span className="ml-2">Geri</span>
        </button>
        
        <div className="aspect-video bg-black rounded-lg relative overflow-hidden">
          <img 
            src={content.image} 
            alt={content.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button 
              className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center opacity-90 hover:opacity-100"
              onClick={togglePlay}
            >
              {isPlaying ? <Pause size={32} /> : <Play size={32} />}
            </button>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm">
                10:08 / {content.duration}
              </div>
              <div className="flex items-center space-x-4">
                <Volume2 size={18} />
                <Maximize2 size={18} />
              </div>
            </div>
            <div className="w-full bg-gray-600 rounded-full h-1">
              <div className="bg-blue-500 h-1 rounded-full" style={{ width: "45%" }}></div>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <h1 className="text-2xl font-bold">{content.title}</h1>
          <div className="flex items-center mt-2 text-gray-400">
            <span>{content.stats}</span>
          </div>
          
          <div className="mt-6 flex items-center justify-between flex-wrap">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <img src={content.avatar} alt={content.creator} className="w-full h-full object-cover" />
              </div>
              <div className="ml-3">
                <h3 className="font-medium">{content.creator}</h3>
                <p className="text-sm text-gray-400">1.2B Abone</p>
              </div>
              <button className="ml-4 bg-blue-500 px-4 py-1 rounded-full text-sm">Abone Ol</button>
            </div>
            
            <div className="flex items-center space-x-2 flex-wrap">
              <button className="flex items-center bg-gray-700 px-3 py-1.5 rounded-full mb-2 md:mb-0">
                <ThumbsUp size={18} />
                <span className="ml-2">{content.likes}</span>
              </button>
              <button className="flex items-center bg-gray-700 px-3 py-1.5 rounded-full mb-2 md:mb-0">
                <Share2 size={18} />
                <span className="ml-2">Paylaş</span>
              </button>
              <button className="flex items-center bg-gray-700 px-3 py-1.5 rounded-full mb-2 md:mb-0">
                <Download size={18} />
              </button>
              <button className="flex items-center bg-gray-700 px-3 py-1.5 rounded-full mb-2 md:mb-0">
                <MoreHorizontal size={18} />
              </button>
            </div>
          </div>
          
          <div className="mt-6 bg-backg1 p-4 rounded-lg">
            <div className="flex justify-between mb-2">
              <h3 className="font-medium">İçerik Açıklaması</h3>
              <button className="text-blue-400 text-sm">Daha fazla</button>
            </div>
            <p className="text-sm text-gray-300">
              {content.description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Comments Section */}
      <div className="mt-6 border-t border-gray-700 pt-4">
        <h3 className="font-medium text-lg mb-4">
          Yorumlar <span className="text-gray-400 text-sm">{content.comments}</span>
        </h3>
        
        <div className="flex mb-6">
          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <div className="w-full h-full bg-blue-500 flex items-center justify-center">
              <User className="text-white" size={20} />
            </div>
          </div>
          <div className="ml-3 flex-1">
            <input
              type="text"
              placeholder="Yorum yazın..."
              className="w-full bg-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        
        {comments.map(comment => (
          <div key={comment.id} className="mb-6">
            <div className="flex">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <img src={comment.avatar} alt={comment.user} className="w-full h-full object-cover" />
              </div>
              <div className="ml-3 flex-1">
                <div className="flex items-center">
                  <h4 className="font-medium">{comment.user}</h4>
                  <span className="ml-2 text-gray-400 text-sm">{comment.timeAgo}</span>
                </div>
                <p className="mt-1 text-gray-300">{comment.content}</p>
                <div className="mt-2 flex items-center text-sm text-gray-400">
                  <button className="flex items-center">
                    <ThumbsUp size={14} />
                    <span className="ml-1">{comment.likes}</span>
                  </button>
                  <span className="mx-1">•</span>
                  <button className="flex items-center">{comment.dislikes}</button>
                  <span className="mx-2">•</span>
                  <button className="text-gray-400">Yanıtla</button>
                  <span className="ml-2 text-gray-500">10 yanıt</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContentDetail;
