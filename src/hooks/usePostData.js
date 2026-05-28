import { useState, useEffect } from 'react';
import { posts as initialPosts } from '../data/posts';

/**
 * Blog yazılarını yönetmek için özel hook
 * @param {Object} options - Başlangıç seçenekleri
 * @returns {Object} - Blog yazıları durumu ve yönetim fonksiyonları
 */
export function usePostData(options = {}) {
  const [posts, setPosts] = useState(initialPosts);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Yazıyı beğen/beğeniyi kaldır
  const toggleLike = (postId) => {
    setPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === postId 
          ? { 
              ...post, 
              isLiked: !post.isLiked, 
              likes: post.isLiked ? post.likes - 1 : post.likes + 1 
            } 
          : post
      )
    );
  };
  
  // Yazıyı kaydet/kaydı kaldır
  const toggleBookmark = (postId) => {
    setPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === postId 
          ? { ...post, isBookmarked: !post.isBookmarked } 
          : post
      )
    );
  };
  
  // Daha fazla yazı yükle (sonsuz kaydırma için)
  const loadMorePosts = async () => {
    try {
      setLoading(true);
      // Gerçek API'dan yazıları almak için buraya fetch işlemi eklenebilir
      // Şimdilik, mevcut yazıları klonlayıp yeni ID'lerle ekleyelim
      setTimeout(() => {
        setPosts(prevPosts => [
          ...prevPosts,
          ...prevPosts.slice(0, 2).map(post => ({
            ...post,
            id: prevPosts.length + post.id
          }))
        ]);
        setLoading(false);
      }, 1000);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  
  return {
    posts,
    loading,
    error,
    toggleLike,
    toggleBookmark,
    loadMorePosts
  };
}